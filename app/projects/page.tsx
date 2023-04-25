import ProjectPreview from '@/components/ProjectPreview';
import getProjectMetadata from '@/components/getProjectMetadata';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Projects - Ferry Dermawan',
    description: 'Lists of website projects that I have worked on as a Full Stack Web Developer.',
};

export default function Page() {
    const projectMetadata = getProjectMetadata();
    const articlePreviews = projectMetadata.map((project) => (
        <ProjectPreview key={project.slug} {...project} />
    ));
    return <div>{articlePreviews}</div>
}
