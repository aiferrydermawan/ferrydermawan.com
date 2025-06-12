import Head from 'next/head';
import Link from 'next/link';
import {getAllPosts} from "@/lib/posts";
import Layout from "@/components/layout";

export async function getStaticProps() {
    const posts = getAllPosts('shorts');
    return { props: { posts } };
}

type Post = {
    slug: string;
    meta: {
        title: string;
        description: string;
        date: string;
        tags: string[];
    };
};

export default function BlogIndex({ posts }: { posts: Post[] }) {
    return (
        <Layout>
            <Head>
                <title>Shorts | Ferry Dermawan</title>
                <meta name="description" content="Shorts: Quick, bite-sized content on IT and programming. Perfect for learning in short bursts and staying sharp on the go." />
            </Head>
            <main>
                <section>
                    <h1 className="font-medium">Shorts</h1>
                    <ul className="mt-3 list-disc list-outside space-y-2 pl-4">
                        {posts.map((post) => (
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
