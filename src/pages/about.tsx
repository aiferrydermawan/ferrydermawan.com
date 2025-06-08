import Head from 'next/head';
import Layout from "@/components/layout";

export default function About() {
    return (
        <Layout>
            <Head>
                <title>About | Ferry Dermawan</title>
                <meta name="description" content="Kumpulan artikel menarik tentang teknologi, coding, dan lainnya." />
            </Head>
            <main>
                <section>
                    <h1 className="font-medium">About</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam amet aspernatur deserunt harum non nostrum omnis sit tempore ut!</p>
                </section>
            </main>
        </Layout>
    );
}
