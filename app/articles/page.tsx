import ArticlePreview from '@/components/ArticlePreview';
import getArticleMetaData from '@/components/getArticleMetadata';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Articles - Ferry Dermawan',
    description: 'List of documentation and records of my learning outcomes.',
};

export default function Page() {
    const articleMetadata = getArticleMetaData();
    const articlePreviews = articleMetadata.map((article) => (
        <ArticlePreview key={article.slug} {...article} />
    ));
    return <div>{articlePreviews}</div>
}
