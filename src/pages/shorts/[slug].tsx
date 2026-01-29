import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import { getAllPosts, getPostBySlug } from '@/lib/posts';
import { remark } from 'remark';
import html from 'remark-html';
import gfm from 'remark-gfm';
import Layout from "@/components/layout";
import Link from "next/link";
import Giscus from "@/components/giscus";
import { giscusConfig } from "@/lib/giscus-config";

export const getStaticPaths: GetStaticPaths = async () => {
    const posts = getAllPosts('shorts');
    const paths = posts.map((post) => ({
        params: { slug: post.slug },
    }));
    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const slug = params?.slug as string;
    const post = getPostBySlug('shorts', slug);
    const processedContent = await remark().use(gfm).use(html).process(post.content);
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
                <p>Tags: {post.meta.tags.length > 0 ? post.meta.tags.join(', ') : 'No tags'}</p>
                <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
            </article>
            
            <section className="prose dark:prose-invert max-w-screen-sm mx-auto border rounded-xl p-5 border-gray-400 dark:border-gray-300 mt-8">
                <p>Thank you for reading this article all the way through.</p>
                <p>If you found this content useful and would like to support me in creating more, you can donate. Your contribution is vital to keeping this blog running.</p>
                <Link href="/donate">Donate here</Link>
            </section>
            
            <section className="max-w-screen-sm mx-auto mt-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Comments</h2>
                <Giscus {...giscusConfig} />
            </section>
        </Layout>
    );
}
