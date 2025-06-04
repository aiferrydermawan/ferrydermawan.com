import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import { getAllPosts, getPostBySlug } from '@/lib/posts';
import { remark } from 'remark';
import html from 'remark-html';
import Layout from "@/components/layout";

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
    const processedContent = await remark().use(html).process(post.content);
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

export default function BlogPost({ post }: { post: any }) {
    return (
        <Layout>
            <Head>
                <title>{`${post.meta.title} | Blog`}</title>
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
                <p>Tags: {post.meta.tags.join(', ')}</p>
                <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
            </article>
        </Layout>
    );
}
