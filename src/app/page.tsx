'use client';

import clsx from 'clsx';
import Link from "next/link";
import Typewriter from "typewriter-effect";
import BoxesHome from "../Components/Home/BoxesHome";
import Timeline from "../Components/Home/Timeline";
import TechGroup from "../Components/Home/Technologies";
import ProjBox from '../Components/Home/Projects';
import { useState } from "react";
import { BiCodeAlt } from "react-icons/bi";
import { IoSparklesOutline } from "react-icons/io5";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa";
import { techInfo, techCategories, type TechCategory } from "@/src/data/tech";
import { projects } from "@/src/data/projects";
import { homeTimeline } from "@/src/data/timeline";

export default function Page() {
    const [activeCategory, setActiveCategory] = useState<TechCategory>("Frontend");
    const visibleTech = techInfo.filter(tech => tech.category === activeCategory);

    return (
        <div>
            <section className="relative dark:bg-black">
                <div className="absolute inset-0 h-[75vh] w-full bg-[radial-gradient(circle,#dddddd_2px,transparent_1px)] bg-size-[30px_30px] sm:bg-size-[40px_40px]">
                    <div className="overflow-hidden absolute inset-0 bg-radial-[at_50%_50%] from-transparent to-black to-100%" />
                </div>

                <div className="relative h-[75vh] flex items-center justify-center px-5">
                    <div className="flex flex-col mx-auto max-w-5xl text-center items-center">
                        <p className="font-serif text-orange-400 pt-10 pb-10 uppercase tracking-wider">Thoughtful engineering. Intentional design.</p>

                        <h1 className="font-serif text-4xl md:text-9xl sm:text-6xl mb-5">Jack
                            <span className="italic opacity-50"> Tanner</span>
                        </h1>

                        <p className="text-2xl sm:text-3xl md:text-5xl font-sans pb-5 opacity-50 italic">I&apos;m a</p>
                        <div className="flex pb-10 font-serif text-2xl sm:text-3xl md:text-4xl">
                            <Typewriter options={{
                                strings: ['Tech Enthusiast', 'Software Engineer', 'Full-Stack Developer', 'Student'],
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 16,
                                delay: 50,
                                cursor: '',
                            }} />
                            <span className="text-orange-400">|</span>
                        </div>

                        <div className="flex flex-col md:flex-row gap-5">
                            <Link href="#footer"
                                className="hover:bg-orange-400 hover:border-orange-400 hover:text-white cursor-pointer bg-white border rounded-full text-black pl-9 pr-9 pt-3 pb-3 mr-5 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 inline-block">
                                Get in touch
                            </Link>
                            <Link href="#about"
                                className="hover:bg-orange-400/5  cursor-pointer bg-transparent border border-white/28 rounded-full text-white pl-9 pr-9 pt-3 pb-3 mr-5 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 inline-block">
                                My journey
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="relative px-5 py-20">
                    <div className="flex flex-col mx-auto max-w-5xl text-center items-center">
                        <div className="grid grid-cols-2 md:grid-cols-4 items-center text-center gap-10 md:gap-20 pb-10">
                            <BoxesHome icon={BiCodeAlt} value="20+" label="technologies known" />
                            <BoxesHome icon={IoSparklesOutline} value="4+" label="Years of Experience" />
                            <BoxesHome icon={MdOutlineRocketLaunch} value="12+" label="completed projects" />
                            <BoxesHome icon={FaGithub} value="13+" label="repositories" />
                        </div>

                        <div className="tracking-wider flex flex-col items-center">
                            <span className="font-serif uppercase opacity-50">explore</span>
                            <div className="pt-5 animate-bounce">
                                <FaArrowDown color="orange" aria-hidden="true" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about" className="dark:bg-black py-40 px-5 pt-59 md:pt-2">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-20 items-start px-6 max-w-6xl mx-auto">
                    <div className="md:col-span-7">
                        <p className="pl-1.5 pb-9 font-serif text-orange-400 uppercase tracking-widest">01 — Biography</p>
                        <h1 className="wrap-break-word font-serif text-4xl md:text-[105px] sm:text-5xl pb-4">
                            Who Am
                            <br />
                            <span className="italic opacity-50">I Really?</span>
                        </h1>
                        <div className="space-y-8 pt-2 max-w-105rem">
                            <p className="font-sans text-2xl">
                                Hi! I&apos;m <span className="font-serif font-bold">Jack Tanner</span>, a passionate American, self-taught coder. I&apos;m a daily learner, always aiming for personal growth.
                                Lead Architect Designer of <span className="font-serif font-bold text-orange-400"> <Link target="_blank" href="https://purrquinox.com/">Purrquinox</Link></span>.
                            </p>

                            <p className="font-sans text-2xl">
                                I started my coding journey as a self-taught enthusiast, driven by curiosity and a passion for technology.
                                What began as a hobby quickly evolved into pursuing a path in college as a computer scientist as I hone my skills through countless hours of practice and real-world projects.
                            </p>
                        </div>
                    </div>
                    <div className="md:col-span-5 ">

                        <p className="font-serif text-white/50 uppercase tracking-widest pb-4">progress log</p>
                        <div className="w-full h-px border-t border-white/10 pb-10" />

                        <div className="relative">
                            <div className="absolute left-0.75 top-1 bottom-1 w-px bg-white/10" />
                            {homeTimeline.map((entry) => (
                                <Timeline key={entry.date} date={entry.date} text={entry.text} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section id="tech" className="dark:bg-black">
                <div className="w-full h-px border-t border-white/10" />

                <div className="text-center">
                    <p className="font-serif text-orange-400 uppercase tracking-wider pt-50">02 - capabilities</p>
                    <h2 className="font-serif text-5xl md:text-7xl pt-7 pb-10"> Technical
                        <span className="font-serif italic opacity-50"> Arsenal</span>
                    </h2>
                </div>

                <div className="flex-col sm:flex-row text-center justify-center bg-white/5 border border-white/10 rounded-2xl mx-auto w-1/2">
                    {techCategories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            aria-pressed={activeCategory === category}
                            className={clsx(
                                "p-3 m-3 text-2xl font-serif tracking-wider rounded-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105",
                                activeCategory === category
                                    ? "bg-linear-to-r from-orange-400 via-yellow-500 to-red-700"
                                    : "border-white/5 bg-white/5 text-white hover:bg-white/5"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="flex flex-col items-center p-5">
                    <div className="grid px-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-10 gap-8">
                        {visibleTech.map(tech => (
                            <TechGroup key={tech.name} {...tech} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="dark:bg-black py-20 px-6">
                <div className="w-full h-px border-t border-white/10 pb-10" />
                <div className="tracking-wider flex flex-col items-center ">
                    <span className="font-serif uppercase opacity-50 ">continuous evolution & learning</span>
                </div>

                <div className="pt-50 pb-30">
                    <p className="font-serif text-orange-400 pb-5 uppercase tracking-widest">03 - selected works</p>
                    <h2 className="font-serif text-5xl md:text-8xl sm:text-7xl mb-5 wrap-break-word">The Digital
                        <span className="italic opacity-50"> Archive</span>
                    </h2>
                </div>

                <div className="flex flex-col gap-10">
                    {projects.map((project) => (
                        <ProjBox key={project.name} {...project} />
                    ))}
                </div>

            </section>
        </div >
    );
}
