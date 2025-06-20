import fs from 'fs';
import path from 'path';
import { SitemapStream, streamToPromise } from 'sitemap';
import { getAllPosts } from './posts'; // Mengambil fungsi getAllPosts dari lib/posts
import { format } from 'date-fns';

// Fungsi untuk menghasilkan sitemap
export const generateSitemap = async () => {
    const sitemap = new SitemapStream({ hostname: 'https://ferrydermawan.com' }); // Ganti dengan hostname website kamu

    // 1. Masukkan URL halaman statis ke dalam sitemap utama
    const staticPages = ['/about', '/blog', '/shorts', '/projects', '/donate','/contact'];

    staticPages.forEach(page => {
        sitemap.write({
            url: page,
            changefreq: 'monthly',
            priority: 0.8,
        });
    });

    // 2. Ambil semua post (blog dan shorts)
    const blogPosts = getAllPosts('blog');
    const shortsPosts = getAllPosts('shorts');

    // 3. Masukkan URL setiap artikel blog ke dalam sitemap
    blogPosts.forEach(post => {
        sitemap.write({
            url: `/blog/${post.slug}`,
            lastmod: format(new Date(post.meta.date), 'yyyy-MM-dd'),
            changefreq: 'monthly',
            priority: 0.7,
        });
    });

    // 4. Masukkan URL setiap artikel shorts ke dalam sitemap
    shortsPosts.forEach(post => {
        sitemap.write({
            url: `/shorts/${post.slug}`,
            lastmod: format(new Date(post.meta.date), 'yyyy-MM-dd'),
            changefreq: 'monthly',
            priority: 0.7,
        });
    });

    // Akhiri penulisan
    sitemap.end();

    // 5. Buat dan simpan sitemap.xml
    const sitemapXML = await streamToPromise(sitemap).then(sm => sm.toString());

    // Simpan sitemap ke dalam folder public
    fs.writeFileSync(path.resolve('public', 'sitemap.xml'), sitemapXML);
    console.log('Sitemap generated successfully!');
};

// Ekspor fungsi untuk dipakai di file lain
export default generateSitemap;
