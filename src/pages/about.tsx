import Head from 'next/head';
import Layout from "@/components/layout";
import Link from "next/link";

export default function About() {
    return (
        <Layout>
            <Head>
                <title>About | Ferry Dermawan</title>
                <meta name="description" content="Learn more about the person behind this blog. Our story, mission, and passion for sharing knowledge in IT and programming." />
            </Head>
            <main>
                <section>
                    <h1 className="font-medium">About</h1>
                    <article className="prose max-w-screen-sm mx-auto mt-3">
                        <p>Hi, I’m Ferry Dermawan, a Fullstack Engineer currently working at <b>PT Tigace Inspirasi Indonesia</b>. This blog is my personal space to document what I’ve learned, encountered, or figured out in the world of tech. Think of it as my second brain — because let’s face it, sometimes we forget things. Instead of searching the web over and over, I’d rather come back to my own notes.</p>
                        <p>Most of the content revolves around <b>PHP, Laravel, JavaScript, and DevOps</b>. From time to time, I also dive into other technologies that pique my interest. I aim to share information and tutorials that are practical and to the point, both for myself and anyone else who might stumble upon this blog.</p>
                        <p>If something here helps you out, that’s awesome! And if you feel like supporting my writing, feel free to visit the <Link href="/donate">/donate</Link> page — it might just fuel the next blog post. 😄</p>
                    </article>
                </section>
            </main>
        </Layout>
    );
}
