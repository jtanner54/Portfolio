'use client';

import {IoHomeOutline } from "react-icons/io5";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaWrench } from "react-icons/fa";
import NavBoxes from './NavbarBoxes';

export default function NavBar() {
    return (
        <header className="z-10 fixed flex justify-center pointer-events-none top-4 left-0 right-0">
            <nav className="pointer-events-auto overflow-hidden max-w-[95vw]">
                <ul className="flex p-3 dark:bg-black border border-white/7 rounded-full gap-3 overflow-x-auto scrollbar-hide">
                    <NavBoxes icon={IoHomeOutline} text="Home" href="/" />
                    <NavBoxes icon={IoIosInformationCircleOutline} text="About" href="/About" />
                    <NavBoxes icon={FaWrench} text="Tech" href="/#tech" />
                </ul>
            </nav>
        </header>
    );
}
