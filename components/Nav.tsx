'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
    const pathname = usePathname();
    const firstPathName = '/' + pathname.split("/")[1];
    const menu : { label: string, href: string }[] = [
        { "label": "Articles", "href" : "/articles" },
        { "label": "Projects", "href" : "/projects" },
        { "label": "About", "href" : "/about" },
    ];

    return (
        <nav className="mt-16">
            <Image className="w-16 rounded-full mb-5" width={100} height={100} src="https://avatars.githubusercontent.com/u/49130170" alt="Ferry Dermawan" />
            <Link className="text-3xl font-bold" href="/">Ferry Dermawan</Link>
            <ul className="uppercase tracking-wide font-medium text-sm flex gap-3 mt-5">
                { menu.map((item, index) => 
                    <li key={index}>
                        <Link className={firstPathName == item.href ? 
                            'text-slate-900 underline underline-offset-[-2px] decoration-2 decoration-slate-300 decoration-skip-ink font-medium' : 
                            'text-slate-900 underline underline-offset-[-2px] decoration-2 decoration-slate-300 decoration-skip-ink font-medium opacity-70 hover:opacity-100'}  href={item.href}>{item.label}</Link>
                    </li>
                )}
                <li>
                    <a target="_blank" className="text-slate-900 underline underline-offset-[-2px] decoration-2 decoration-slate-300 decoration-skip-ink font-medium opacity-70 hover:opacity-100" href="https://github.com/sponsors/aiferrydermawan">Sponsor</a>
                </li>
            </ul>
        </nav>
    )
}
