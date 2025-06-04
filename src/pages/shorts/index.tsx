import Head from 'next/head';
import Link from 'next/link';
import {getAllPosts} from "@/lib/posts";
import Layout from "@/components/layout";

export async function getStaticProps() {
    const posts = getAllPosts('shorts');
    return { props: { posts } };
}

export default function BlogIndex({ posts }: { posts: any[] }) {
    return (
        <Layout>
            <Head>
                <title>Shorts | My Website</title>
                <meta name="description" content="Kumpulan artikel menarik tentang teknologi, coding, dan lainnya." />
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
