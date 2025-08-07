import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { getAllPosts } from "@/lib/posts";
import Layout from "@/components/layout";

export async function getStaticProps() {
    const posts = getAllPosts('blog');
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
            pathname: '/blog',
            query: newTags.length ? { tags: newTags.join(',') } : {},
        });
    };

    return (
        <Layout>
            <Head>
                <title>Blog | Ferry Dermawan</title>
                <meta name="description" content="Explore in-depth articles on IT, coding, and software development." />
            </Head>

            <main className="max-w-4xl mx-auto">
                <h1 className="font-medium text-gray-900 dark:text-gray-100">Blog</h1>

                <div className="mt-5">
                    <div className="flex flex-wrap gap-2">
                        {allTags.map(tag => (
                            <button
                                key={tag}
                                onClick={() => toggleTag(tag)}
                                className={`px-2 py-0.5 rounded-full text-xs border transition-colors ${
                                    activeTags.includes(tag) 
                                        ? 'bg-blue-500 text-white border-blue-500' 
                                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700'
                                }`}
                            >
                                #{tag}
                            </button>
                        ))}
                    </div>
                </div>

                <ul className="mt-3 list-outside space-y-6">
                    {filteredPosts.map((post) => (
                        <li key={post.slug} className="flex flex-col">
                            <time className="text-sm text-gray-600 dark:text-gray-400">
                                {new Intl.DateTimeFormat('en-US', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(post.meta.date))}
                            </time>
                            <Link 
                                href={`/blog/${post.slug}`} 
                                className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 mt-2 transition-colors"
                            >
                                {post.meta.title}
                            </Link>
                            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-1">{post.meta.description}</p>
                            <div className="flex flex-wrap gap-1 mt-4">
                                {post.meta.tags.map(tag => (
                                    <span key={tag} className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-0.5 rounded">
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
