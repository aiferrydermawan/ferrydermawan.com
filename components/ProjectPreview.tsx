import Link from "next/link";
import { ProjectMetadata } from "./ProjectMetadata";

const ProjectPreview = (props: ProjectMetadata) => {
    return (
        <div className="mt-5" key={props.slug}>
            <Link className="text-blue-600 underline underline-offset-[-2px] decoration-2 decoration-blue-300 decoration-skip-ink font-medium opacity-80 hover:opacity-100 inline-flex" href={`projects/${props.slug}`}>
                <h2 className="text-lg lg:text-xl font-bold">{props.title}</h2>
            </Link>
            <p className="text-slate-600">{props.description}</p>
        </div>
    )
}

export default ProjectPreview;