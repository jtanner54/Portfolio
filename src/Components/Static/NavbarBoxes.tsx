'use client';

import clsx from "clsx";
import { IconType } from "react-icons";
import Link from "next/link";
import { usePathname } from 'next/navigation';

type Props = {
    icon: IconType;
    text: string;
    href: string;
}

export default function NavBoxes({ icon: Icon, text, href }: Props) {
    const pathname = usePathname();

    const isActive = pathname === href || (href.includes('#') && pathname === '/');

    return (
        <li>
            <Link
                href={href}
                aria-label={`Navigate to ${text}`}
                className={clsx(
                    "flex p-2 gap-1 items-center border border-white/7 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-100",
                    isActive ? "bg-white/24" : "bg-zinc-100/5"
                )}>
                <Icon className="size-3.5" aria-hidden="true" />
                {text}
            </Link>
        </li>
    );
}
