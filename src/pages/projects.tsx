import Head from 'next/head';
import Layout from "@/components/layout";

export default function Projects() {
    return (
        <Layout>
            <Head>
                <title>Projects | Ferry Dermawan</title>
                <meta name="description" content="Explore IT and software projects we've built and contributed to. From open-source tools to personal experiments and community-driven work." />
            </Head>
            <main>
                <section>
                    <h1 className="font-medium text-gray-900 dark:text-gray-100">Projects</h1>
                    <p className="text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adip isicing elit. Accusantium aliquam amet aspernatur deserunt harum non nostrum omnis sit tempore ut!</p>
                </section>
            </main>
        </Layout>
    );
}
