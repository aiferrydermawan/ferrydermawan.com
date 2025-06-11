import Head from 'next/head';
import Layout from "@/components/layout";

const uses = [
    {
        title: "Macbook M1 2020",
        description: "",
    },
    {
        title: "Text Editor",
        description: "PhpStorm & WebStorm",
    },
    {
        title: "Database Management",
        description: "DataGrip",
    },
    {
        title: "AI Tools",
        description: "ChatGPT, Gemini",
    },
    {
        title: "Team Workflow",
        description: "Microsoft Teams",
    },
];

export default function Uses() {
    return (
        <Layout>
            <Head>
                <title>Uses | Ferry Dermawan</title>
                <meta
                    name="description"
                    content="A collection of personal financial goals including debt freedom, education funds, and retirement planning."
                />
            </Head>
            <main>
                <section>
                    <h1 className="font-medium">Uses</h1>
                    <ul className="mt-5 gap-4 flex flex-col">
                        {uses.map((use, index) => (
                            <li key={index} className="flex items-start">
                                <div className="flex flex-col">
                                    <h2>{use.title}</h2>
                                    <p className="text-sm text-gray-500">{use.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>
            </main>
        </Layout>
    );
}
