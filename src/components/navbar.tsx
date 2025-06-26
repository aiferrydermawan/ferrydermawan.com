import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex justify-start">
            <div className="space-x-4 text-sm">
                <Link href="/" className="text-gray-700 hover:text-black">Home</Link>
                <Link href="/blog" className="text-gray-700 hover:text-black">Blog</Link>
                <Link href="/shorts" className="text-gray-700 hover:text-black">Shorts</Link>
                {/*<Link href="/projects" className="text-gray-700 hover:text-black">Projects</Link>*/}
            </div>
        </nav>
    );
}
