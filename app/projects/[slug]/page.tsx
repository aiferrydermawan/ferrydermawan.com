import getProjectMetadata from '@/components/getProjectMetadata';
import fs from 'fs';
import matter from 'gray-matter';
import Markdown from 'markdown-to-jsx';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const getProjectContent = (slug: string) => {
    const folder = "contents/projects/";
    const file = `${folder}${slug}.mdx`;
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);

    return matterResult;
}

export const generateStaticParams = async () => {
    const projects = getProjectMetadata();
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export function generateMetadata(props: any): Metadata {
    const slug = props.params.slug;
    const project = getProjectContent(slug);
    return {
        title: `${project.data.title} - Ferry Dermawan`,
        description: project.data.description,
    };
}

export default function Page(props: any) {
    const slug = props.params.slug;
    const project = getProjectContent(slug);
    return (
        <article className="prose prose-base lg:prose-base xl:prose-lg max-w-none mt-16">
            { project.data.thumbnail ?
                <Image width={720} height={480} src={project.data.thumbnail} alt={project.data.title} priority /> : ''
            }
            <h1>{project.data.title}</h1>
            <p>{project.data.description}</p>
            <Link href={project.data.url}>{project.data.url}</Link>
            <Markdown>{project.content}</Markdown>
        </article>
    )
}
