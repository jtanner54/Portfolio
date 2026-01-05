import Link from "next/link";
import { FaGithub, FaLinkedin, FaLink, FaRegCopyright } from "react-icons/fa6";
import Time from "./Time";

export default function Footer() {
    return (
        <footer className="flex flex-col items-start dark:bg-black py-50 px-10 sm:px-50">
            <div className="w-full h-px border-t border-white/10" />

            <div className="text-center pb-10 flex justify-center">
                <h1 className="pt-8 lg:text-9xl md:text-6xl sm:text-6xl text-5xl font-serif text-white/8 uppercase">Codecrafted</h1>
            </div>
            <div className="flex flex-col md:flex-row gap-10 justify-between items-center">
                <div className="max-w-4xl">
                    <p className="font-serif    -expanded pb-10 text-orange-400 uppercase tracking-wider">Ready To Build?</p>
                    <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl">
                        Thoughtful
                        <span className="italic opacity-50"> Engineering. </span>
                        Intentional
                        <span className="italic opacity-50"> Design.</span>
                    </h1>
                </div>
                <div className="flex flex-col mt-8 gap-3 pr-30">
                    <div className="w-50 flex items-center text-center bg-white border rounded-full gap-2 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer">
                        <div>
                            <Link
                                href="mailto:jtanner0786@gmail.com"
                                className="flex">
                                <span className="font-serif text-xs text-black uppercase font-bold pl-5 pt-5 pb-5">Start a project</span>

                            </Link>
                        </div>
                        <div className="dark:bg-black border rounded-full">
                            <FaLink color="white" className="size-4 m-2" />
                        </div>
                    </div>
                    <div className="ml-3 flex gap-10 items-center">
                        <Link className="flex gap-2" href="https://github.com/jtanner54" target="_blank">
                            <FaGithub color="gray" className="size-5" />
                            <span className="text-gray-500 font-serif uppercase">Github</span>
                        </Link>
                        <Link href="https://www.linkedin.com/in/jack-tanner-828456339/" target="_blank" className="flex gap-2">
                            <FaLinkedin color="gray" className="size-5" />
                            <span className="text-gray-500 font-serif uppercase">LinkedIN</span>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="mt-25 pb-7 w-full h-px border-t border-white/10" />

            <div className="flex flex-col sm:flex-row gap-5 items-start">
                <div className="flex gap-20">
                    <div className="max-w-20">
                        <p className="font-serif italic text-white/50 text-xs">
                            Location
                        </p>
                        <p className="text-xs font-serif">
                            USA, EST
                        </p>
                    </div>
                    <div className="max-w-20">
                        <p className="font-serif italic text-white/50 text-xs">
                            Local Time
                        </p>
                        <Time />
                    </div>
                </div>

                <div className="flex items-center gap-2 font-serif sm:ml-auto text-white/50">
                    <FaRegCopyright className="size-3" /> 2025 Jack Tanner
                </div>
            </div>
        </footer>
    );
}