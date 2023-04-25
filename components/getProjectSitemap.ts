import fs from 'fs';
import matter from 'gray-matter';
import { SitemapMetadata } from './SitemapMetadata';

const getProjectSitemap = (): SitemapMetadata[] => {
    const folder = "contents/projects/";
    const files = fs.readdirSync(folder);
    const markdownProjects = files.filter((file) => file.endsWith(".mdx"));
    const projects = markdownProjects.map((fileName) => {
        const fileContents = fs.readFileSync(`contents/projects/${fileName}`, "utf8");
        const matterResult = matter(fileContents);
        const slug = fileName.replace(".mdx","");
        const url = `https://ferrydermawan.com/projects/${slug}`
        return {
            url: url,
            lastModified: matterResult.data.startAt,
        }
    });

    const sortedProjects = projects.sort((a, b) => 
        a.lastModified > b.lastModified ? -1 : 1
    )

    return sortedProjects;
}

export default getProjectSitemap;