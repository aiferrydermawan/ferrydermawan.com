import { GetStaticProps } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import Layout from "@/components/layout";
import Head from "next/head";

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
            </Head>
            <header>
                <h1 className="font-medium">Ferry Dermawan</h1>
                <p className=" mt-5 text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolor doloremque eos exercitationem id minus nemo omnis possimus praesentium unde.
                </p>
            </header>

            <main>
                {/*<section>*/}
                {/*    <h2 className="font-medium mt-12">Blog</h2>*/}
                {/*    <ul className="mt-3 list-disc list-outside space-y-2 pl-4">*/}
                {/*        {blogPosts.map((post) => (*/}
                {/*            <li className="pl-2" key={post.slug}>*/}
                {/*                <Link*/}
                {/*                    href={`/blog/${post.slug}`}*/}
                {/*                    className="text-blue-500 hover:text-blue-700"*/}
                {/*                >*/}
                {/*                    {post.meta.title}*/}
                {/*                </Link>*/}
                {/*            </li>*/}
                {/*        ))}*/}
                {/*    </ul>*/}
                {/*</section>*/}

                <section>
                    <h2 className="font-medium mt-12">Shorts</h2>
                    <ul className="mt-3 list-disc list-outside space-y-2 pl-4">
                        {shortPosts.map((post) => (
                            <li className="pl-2" key={post.slug}>
                                <Link
                                    href={`/shorts/${post.slug}`}
                                    className="text-blue-500 hover:text-blue-700"
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
