'use client';

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

    return (
        <li>
            <Link
                href={href}
                className={`flex p-2 gap-1  items-center border border-white/7 rounded-full ${pathname == `${href}` ? 'bg-white/24' : 'bg-zinc-100/5'} transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-100`}>
                <Icon className="size-3.5" />
                {text}
            </Link>
        </li>
    );
}