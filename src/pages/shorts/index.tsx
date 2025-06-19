import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { getAllPosts } from "@/lib/posts";
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

export default function ShortsIndex({ posts }: { posts: Post[] }) {
    const router = useRouter();
    const tagQuery = router.query.tags as string | undefined;
    const activeTags = tagQuery?.split(',') ?? [];

    const filteredPosts = activeTags.length
        ? posts.filter(post =>
            activeTags.every(tag => post.meta.tags.includes(tag))
        )
        : posts;

    const allTags = Array.from(new Set(posts.flatMap(post => post.meta.tags)));

    const toggleTag = (tag: string) => {
        const newTags = activeTags.includes(tag)
            ? activeTags.filter(t => t !== tag)
            : [...activeTags, tag];
        router.push({
            pathname: '/shorts',
            query: newTags.length ? { tags: newTags.join(',') } : {},
        });
    };

    return (
        <Layout>
            <Head>
                <title>Shorts | Ferry Dermawan</title>
                <meta name="description" content="Shorts: Quick, bite-sized content on IT and programming. Perfect for learning in short bursts and staying sharp on the go." />
            </Head>

            <main className="max-w-4xl mx-auto">
                <h1 className="font-medium">Shorts</h1>

                <div className="mt-5">
                    <div className="flex flex-wrap gap-2">
                        {allTags.map(tag => (
                            <button
                                key={tag}
                                onClick={() => toggleTag(tag)}
                                className={`px-2 py-0.5 rounded-full text-xs border ${activeTags.includes(tag) ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
                            >
                                #{tag}
                            </button>
                        ))}
                    </div>
                </div>

                <ul className="mt-3 list-outside space-y-6">
                    {filteredPosts.map((post) => (
                        <li key={post.slug} className="flex flex-col">
                            <time className="text-sm text-gray-600">{new Intl.DateTimeFormat('en-US', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(post.meta.date))}</time>
                            <Link href={`/shorts/${post.slug}`} className="text-blue-500 hover:text-blue-700 mt-2">
                                {post.meta.title}
                            </Link>
                            <p className="text-sm text-gray-600 line-clamp-1">{post.meta.description}</p>
                            <div className="flex flex-wrap gap-1 mt-4">
                                {post.meta.tags.map(tag => (
                                    <span key={tag} className="text-xs bg-gray-200 px-2 py-0.5 rounded">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </li>
                    ))}
                </ul>
            </main>
        </Layout>
    );
}
