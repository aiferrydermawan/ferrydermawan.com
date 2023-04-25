import { ArticleMetadata } from '@/components/ArticleMetadata';
import fs from 'fs';
import matter from 'gray-matter';

const getArticleMetaData = (): ArticleMetadata[] => {
    const folder = "contents/articles/";
    const files = fs.readdirSync(folder);
    const markdownArticles = files.filter((file) => file.endsWith(".mdx"));
    const articles = markdownArticles.map((fileName) => {
        const fileContents = fs.readFileSync(`contents/articles/${fileName}`, "utf8");
        const matterResult = matter(fileContents);
        return {
            title: matterResult.data.title,
            publishedAt: matterResult.data.publishedAt,
            description: matterResult.data.description,
            tags: matterResult.data.tags,
            slug: fileName.replace(".mdx","")
        }
    });

    const sortedArticles = articles.sort((a, b) => 
        a.publishedAt > b.publishedAt ? -1 : 1
    )

    return sortedArticles;
}

export default getArticleMetaData;