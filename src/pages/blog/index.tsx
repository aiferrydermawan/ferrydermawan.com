import Head from 'next/head';
import Link from 'next/link';
import {getAllPosts} from "@/lib/posts";
import Layout from "@/components/layout";

export async function getStaticProps() {
    const posts = getAllPosts('blog');
    return { props: { posts } };
}

export default function BlogIndex({ posts }: { posts: any[] }) {
    return (
        <Layout>
            <Head>
                <title>Blog | My Website</title>
                <meta name="description" content="Kumpulan artikel menarik tentang teknologi, coding, dan lainnya." />
            </Head>
            <main>
                <section>
                    <h1 className="font-medium">Blog</h1>
                    <ul className="mt-3 list-disc list-outside space-y-2 pl-4">
                        {posts.map((post) => (
                            <li className="pl-2" key={post.slug}>
                                <Link
                                    href={`/blog/${post.slug}`}
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
