import Head from 'next/head';
import Layout from "@/components/layout";

export default function About() {
    const donates = [
        {
            title: 'Paypal',
            url: 'https://www.paypal.me/aiferrydermawan',
        },
        {
            title: 'Github',
            url: 'https://github.com/sponsors/aiferrydermawan',
        },
        {
            title: 'Trakteer (Rupiah)',
            url: 'https://trakteer.id/aiferrydermawan',
        },
    ];
    return (
        <Layout>
            <Head>
                <title>Donate | Ferry Dermawan</title>
                <meta name="description" content="Support this blog and help us continue creating quality content on IT and programming. Every donation helps keep the community growing." />
            </Head>
            <main>
                <section>
                    <h1 className="font-medium">Donate</h1>
                    <ul className="mt-3 list-disc list-outside space-y-2 pl-4">
                        {donates.map((donate, index) => (
                            <li className="pl-2" key={index}>
                                <a className="text-blue-500 hover:text-blue-700" target="_blank" href={donate.url}>{donate.title}</a>
                            </li>
                        ))}
                    </ul>
                </section>
            </main>
        </Layout>
    );
}
