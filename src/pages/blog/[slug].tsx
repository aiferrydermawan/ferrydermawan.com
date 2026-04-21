import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import { useEffect, useRef } from 'react';
import { getAllPosts, getPostBySlug } from '@/lib/posts';
import { remark } from 'remark';
import gfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeHighlight from 'rehype-highlight';
import rehypeStringify from 'rehype-stringify';
import Layout from "@/components/layout";
import Link from "next/link";
import Giscus from "@/components/giscus";
import { giscusConfig } from "@/lib/giscus-config";

export const getStaticPaths: GetStaticPaths = async () => {
    const posts = getAllPosts('blog');
    const paths = posts.map((post) => ({
        params: { slug: post.slug },
    }));
    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const slug = params?.slug as string;
    const post = getPostBySlug('blog', slug);
    const processedContent = await remark()
        .use(gfm)
        .use(remarkRehype)
        .use(rehypeHighlight)
        .use(rehypeStringify)
        .process(post.content);
    const contentHtml = processedContent.toString();

    return {
        props: {
            post: {
                ...post,
                contentHtml,
            },
        },
    };
};

type BlogPostProps = {
    post: {
        meta: {
            title: string;
            description: string;
            date: string;
            tags: string[];
        };
        contentHtml: string;
    };
};

export default function BlogPost({ post }: BlogPostProps) {
    const articleContentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = articleContentRef.current;
        if (!container) return;

        const languageLabel = (className: string) => {
            const match = className.match(/language-([a-z0-9+-]+)/i);
            if (!match) return 'text';
            return match[1].toLowerCase();
        };

        const preElements = container.querySelectorAll<HTMLPreElement>('pre');
        preElements.forEach((pre) => {
            if (pre.dataset.codeWindow === 'true') return;

            const code = pre.querySelector('code');
            if (!code) return;

            const wrapper = document.createElement('div');
            wrapper.className = 'code-window';

            const header = document.createElement('div');
            header.className = 'code-window__header';

            const dots = document.createElement('span');
            dots.className = 'code-window__dots';
            dots.setAttribute('aria-hidden', 'true');

            const title = document.createElement('span');
            title.className = 'code-window__title';
            title.textContent = languageLabel(code.className);

            const copyButton = document.createElement('button');
            copyButton.type = 'button';
            copyButton.className = 'code-window__copy';
            copyButton.textContent = 'Copy';
            copyButton.addEventListener('click', async () => {
                try {
                    await navigator.clipboard.writeText(code.textContent ?? '');
                    copyButton.textContent = 'Copied';
                    window.setTimeout(() => {
                        copyButton.textContent = 'Copy';
                    }, 1500);
                } catch {
                    copyButton.textContent = 'Failed';
                    window.setTimeout(() => {
                        copyButton.textContent = 'Copy';
                    }, 1500);
                }
            });

            header.append(dots, title, copyButton);

            pre.parentElement?.insertBefore(wrapper, pre);
            wrapper.append(header, pre);
            pre.dataset.codeWindow = 'true';
        });
    }, [post.contentHtml]);

    return (
        <Layout>
            <Head>
                <title>{`${post.meta.title} | Ferry Dermawan`}</title>
                <meta name="description" content={post.meta.description} />
            </Head>
            <article className="prose dark:prose-invert max-w-screen-sm mx-auto">
                <h1>{post.meta.title}</h1>
                <p>Author: Ferry Dermawan</p>
                <p>
                    Date: <time dateTime={post.meta.date}>
                    {new Intl.DateTimeFormat('en-US', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(post.meta.date))}
                </time>
                </p>
                <p>Tags: {post.meta.tags.join(', ')}</p>
                <div ref={articleContentRef} dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
            </article>
            
            <section className="prose dark:prose-invert max-w-screen-sm mx-auto border rounded-xl p-5 border-gray-400 dark:border-gray-300 mt-8">
                <p>Thank you for reading this article all the way through.</p>
                <p>If you found this content useful and would like to support me in creating more, you can donate. Your contribution is vital to keeping this blog running.</p>
                <Link href="/donate">Donate here</Link>
            </section>
            
            <section className="max-w-screen-sm mx-auto mt-8">
                <h2 className="text-2xl font-bold mb-4">Comments</h2>
                <Giscus {...giscusConfig} />
            </section>
        </Layout>
    );
}
