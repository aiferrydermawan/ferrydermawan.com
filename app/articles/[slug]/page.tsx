import getArticleMetaData from '@/components/getArticleMetadata';
import fs from 'fs';
import matter from 'gray-matter';
import Markdown from 'markdown-to-jsx';
import { Metadata } from 'next';

const getArticleContent = (slug: string) => {
    const folder = "contents/articles/";
    const file = `${folder}${slug}.mdx`;
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);

    return matterResult;
}

const dateTemplate = (slug: string) => {
    const article = getArticleContent(slug);
    const dateStr = article.data.publishedAt;
    const dateObj = new Date(dateStr);
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];
    const monthIndex = dateObj.getMonth();
    const monthName = monthNames[monthIndex];
    const day = dateObj.getDate().toString().padStart(2, '0');
    const year = dateObj.getFullYear();
    const formattedDate = `${day} ${monthName} ${year}`;
    return formattedDate;
}

export const generateStaticParams = async () => {
    const articles = getArticleMetaData();
    return articles.map((article) => ({
        slug: article.slug,
    }));
}

export function generateMetadata(props: any): Metadata {
    const slug = props.params.slug;
    const article = getArticleContent(slug);
    return {
        title: `${article.data.title} - Ferry Dermawan`,
        description: article.data.description,
    };
}

export default function Page(props: any) {
    
    const slug = props.params.slug;
    const article = getArticleContent(slug);
    const publishedAt = dateTemplate(slug);
    const metadata = {
        title: `${article.data.title} - Ferry Dermawan`,
        description: article.data.description,
    };

    return (
        <div>
        <article className="prose prose-base lg:prose-base xl:prose-lg max-w-none mt-16">
            <time>{publishedAt}</time>
            <h1>{article.data.title}</h1>
            <p>Tags: {article.data.tags}</p>
            <p>{article.data.description}</p>
            <Markdown>{article.content}</Markdown>
        </article>
        </div>
    )
}
