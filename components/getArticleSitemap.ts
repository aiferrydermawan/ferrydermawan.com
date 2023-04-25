import fs from 'fs';
import matter from 'gray-matter';
import { SitemapMetadata } from './SitemapMetadata';

const getArticleSitemap = (): SitemapMetadata[] => {
    const folder = "contents/articles/";
    const files = fs.readdirSync(folder);
    const markdownArticles = files.filter((file) => file.endsWith(".mdx"));
    const articles = markdownArticles.map((fileName) => {
        const fileContents = fs.readFileSync(`contents/articles/${fileName}`, "utf8");
        const matterResult = matter(fileContents);
        const slug = fileName.replace(".mdx","");
        const url = `https://ferrydermawan.com/articles/${slug}`
        return {
            url: url,
            lastModified: matterResult.data.publishedAt,
        }
    });

    const sortedArticles = articles.sort((a, b) => 
        a.lastModified > b.lastModified ? -1 : 1
    )

    return sortedArticles;
}

export default getArticleSitemap;