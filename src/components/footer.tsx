import Link from "next/link";

export default function Footer() {
    return (
        <footer className="text-sm text-gray-500">
                <div className="flex gap-4 mb-4">
                    <a href="https://umami-gamma-gray.vercel.app/share/CrKECMbzqnOs8nMo/ferrydermawan.com">Analytics</a>
                    <Link href="/donate">Donate</Link>
                </div>
                <p>© {new Date().getFullYear()} Ferry Dermawan. All rights reserved.</p>
        </footer>
    );
}
