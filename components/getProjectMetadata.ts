import { ProjectMetadata } from '@/components/ProjectMetadata';
import fs from 'fs';
import matter from 'gray-matter';

const getProjectMetadata = (): ProjectMetadata[] => {
    const folder = "contents/projects/";
    const files = fs.readdirSync(folder);
    const markdownProject = files.filter((file) => file.endsWith(".mdx"));
    const project = markdownProject.map((fileName) => {
        const fileContents = fs.readFileSync(`contents/projects/${fileName}`, "utf8");
        const matterResult = matter(fileContents);
        return {
            title: matterResult.data.title,
            description: matterResult.data.description,
            slug: fileName.replace(".mdx","")
        }
    });

    return project;
}

export default getProjectMetadata;