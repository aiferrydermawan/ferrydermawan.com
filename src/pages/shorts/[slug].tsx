import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import { getAllPosts, getPostBySlug } from '@/lib/posts';
import { remark } from 'remark';
import html from 'remark-html';
import gfm from 'remark-gfm';
import Layout from "@/components/layout";

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

export default function ShortsPost({ post }: { post: any }) {
    return (
        <Layout>
            <Head>
                <title>{`${post.meta.title} | Shorts`}</title>
                <meta name="description" content={post.meta.description} />
            </Head>
            <article className="prose max-w-screen-sm mx-auto">
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
        </Layout>
    );
}
