import Head from 'next/head';
import Layout from "@/components/layout";

export default function Contact() {
    const contact = [
        {
            title: 'Instagram',
            url: 'https://www.instagram.com/aiferrydermawan',
        },
        {
            title: 'Facebook',
            url: 'https://www.facebook.com/aiferrydermawan',
        },
        {
            title: 'Threads',
            url: 'https://www.threads.com/@aiferrydermawan',
        },
        {
            title: 'X',
            url: 'https://x.com/aiferrydermawan',
        },
    ];
    return (
        <Layout>
            <Head>
                <title>Contact | Ferry Dermawan</title>
                <meta name="description" content="Support this blog and help us continue creating quality content on IT and programming. Every donation helps keep the community growing." />
            </Head>
            <main>
                <section>
                    <h1 className="font-medium">Contact</h1>
                    <ul className="mt-3 list-disc list-outside space-y-2 pl-4">
                        {contact.map((donate, index) => (
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
