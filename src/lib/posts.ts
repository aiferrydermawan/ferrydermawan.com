import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDir = (type: 'blog' | 'shorts') => path.join(process.cwd(), 'src', 'content', type);

export function getAllPosts(type: 'blog' | 'shorts') {
    const dir = contentDir(type);
    const files = fs.readdirSync(dir);

    const posts = files.map((filename) => {
        const filePath = path.join(dir, filename);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(fileContent);

        return {
            slug: filename.replace('.md', ''),
            meta: {
                title: data.title,
                description: data.description,
                date: data.date,
                tags: data.tags || [],
            },
            content,
        };
    });

    // Sorting descending berdasarkan date terbaru
    posts.sort((a, b) => {
        const dateA = new Date(a.meta.date).getTime();
        const dateB = new Date(b.meta.date).getTime();
        return dateB - dateA; // descending: terbaru di depan
    });

    return posts;
}

export function getPostBySlug(type: 'blog' | 'shorts', slug: string) {
    const filePath = path.join(contentDir(type), `${slug}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);

    return {
        slug,
        meta: {
            title: data.title,
            description: data.description,
            date: data.date,
            tags: data.tags || [],
        },
        content,
    };
}