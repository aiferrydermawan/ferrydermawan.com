import { GetStaticProps } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import Layout from "@/components/layout";
import Head from "next/head";
import { AdSenseRectangle } from "@/components/AdSense";

type Props = {
    blogPosts: {
        slug: string;
        meta: { title: string; tags: string[]; date: string };
    }[];
    shortPosts: {
        slug: string;
        meta: { title: string; tags: string[]; date: string };
    }[];
};

export const getStaticProps: GetStaticProps = async () => {
    const blogPosts = getAllPosts("blog").slice(0, 5);
    const shortPosts = getAllPosts("shorts").slice(0, 5);

    return {
        props: {
            blogPosts: blogPosts || [],
            shortPosts: shortPosts || [],
        },
    };
};

export default function Home({ blogPosts, shortPosts }: Props) {
    return (
        <Layout>
            <Head>
                <title>Ferry Dermawan</title>
                <meta name="description" content="Welcome to our IT and programming blog! Discover articles, tips, and tutorials on technology, software development, and the latest digital trends." />
            </Head>
            <header>
                <h1 className="font-medium text-gray-900 dark:text-gray-100">Ferry Dermawan</h1>
                <p className="mt-5 text-gray-600 dark:text-gray-400">
                    Hi! I&apos;m Ferry Dermawan, a Fullstack Engineer. This blog shares notes, tutorials, and tech topics around PHP, Laravel, JavaScript, and DevOps — all based on things I encounter in my daily work.
                </p>
            </header>

            <main>
                <section>
                    <h2 className="font-medium mt-12 text-gray-900 dark:text-gray-100">Blog</h2>
                    <ul className="mt-3 list-disc list-outside space-y-2 pl-4">
                        {blogPosts.map((post) => (
                            <li className="pl-2" key={post.slug}>
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                                >
                                    {post.meta.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Ad between sections */}
                <AdSenseRectangle className="max-w-screen-sm mx-auto" />

                <section>
                    <h2 className="font-medium mt-12 text-gray-900 dark:text-gray-100">Shorts</h2>
                    <ul className="mt-3 list-disc list-outside space-y-2 pl-4">
                        {shortPosts.map((post) => (
                            <li className="pl-2" key={post.slug}>
                                <Link
                                    href={`/shorts/${post.slug}`}
                                    className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                                >
                                    {post.meta.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>
            </main>
        </Layout>
    );
}
