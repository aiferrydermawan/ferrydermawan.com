import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center">
            <div className="space-x-4 text-sm">
                <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">Home</Link>
                <Link href="/blog" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">Blog</Link>
                <Link href="/shorts" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">Shorts</Link>
                {/*<Link href="/projects" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">Projects</Link>*/}
            </div>
            <ThemeToggle />
        </nav>
    );
}
