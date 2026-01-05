'use client'

import Box from "@/src/Components/BoxesAbout";

export default function Page() {
    return (
        <div>
            <section className="relative w-full">
                <div className="absolute inset-0 h-210 w-full dark:bg-black bg-[linear-gradient(to_right,#dddddd_1px,transparent_1px),linear-gradient(to_bottom,#dddddd_1px,transparent_1px)] bg-size-[50px_50px]">
                    <div className="overflow-hidden absolute inset-0 bg-radial-[at_50%_50%] from-transparent to-black to-60%" />
                </div>

                <div className="flex flex-col items-center justify-center w-full pt-40 dark:bg-white">
                    <p className="z-10 font-serif text-orange-400 pt-30 pb-12 uppercase tracking-wider">00 — Identity</p>
                    <h1 className="z-10 font-light text-5xl md:text-9xl sm:text-7xl">Who Am
                        <span className="font-serif italic opacity-50"> I?</span>
                    </h1>
                </div>
            </section>

            <section className="relative dark:bg-charcoal py-120 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8 items-start pb-20">
                        <div className="">
                            <p className="z-10 pl-1.5 pb-9 font-serif   text-orange-400 uppercase tracking-wider">01 — Philosophy</p>
                            <h1 className="wrap-break-word font-light text-4xl md:text-7xl sm:text-5xl pb-9">Engineering
                                <span className="text-4xl md:text-7xl sm:text-5xl font-serif italic opacity-50"> Understanding.</span>
                            </h1>
                            <p className="border-l-2 border-orange-400 pl-5 font-serif italic opacity-80 text-3xl">“Understanding the system matters more than memorizing the solution.”</p>
                        </div>
                        <div className="">
                            <p className="text-2xl font-serif pb-8.5">I'm Jack Tanner, a computer science student at Rose-Hulman, driven less by lectures and more by curiosity.
                                My education doesn't stop at the syllabus—it accelerates when something breaks, behaves unexpectedly, or begs to be understood at a deeper level.
                            </p>
                            <p className="text-2xl font-serif opacity-50">
                                I believe the best engineers are self-taught long before they're credentialed.
                                I learn by building, deconstructing, and iterating—treating every system as both a tool and a puzzle.
                                Code, to me, is not just implementation; it's a way to reason about complexity, efficiency, and truth.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="dark:bg-black py-30 px-6">
                <div className="max-w-5xl mx-auto items-center text-center">
                    <div className="items-center text-center">
                        <p className="font-serif   pb-10 text-orange-400 uppercase tracking-wider">02 — Chronology</p>
                        <h1 className="font-serif pb-30 text-4xl sm:text-6xl md:text-8xl italic">The Path</h1>
                    </div>
                    <div className="flex flex-col md:flex-row mb-5 sm:mb-50 gap-12 items-center">
                        <div className="flex-1 ">
                            <h1 className="text-7xl md:text-[12rem] italic font-serif">2022</h1>
                            <h3 className="text-4xl md:text-5xl font-serif italic opacity-50">The Spark</h3>
                        </div>

                        <div className="w-px h-45 bg-linear-to-b from-orange-400 to-transparent hidden md:block" />
                        <div className="flex-1" />
                    </div>
                    <div className="flex flex-col md:flex-row mb-5 sm:mb-50 gap-12 items-center">
                        <div className="flex-1" />
                        <div className="w-px h-45 bg-linear-to-b from-orange-400 to-transparent hidden md:block" />
                        <div className="flex-1">
                            <h1 className="text-7xl md:text-[12rem] italic font-serif">2024</h1>
                            <h3 className="text-4xl md:text-5xl font-serif italic opacity-50 pb-20">Rose-Hulman</h3>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row mb-5 sm:mb-65 gap-12 items-center">
                        <div className="flex-1 ">
                            <h1 className="text-7xl md:text-[12rem] italic font-serif">2025</h1>
                            <h3 className="text-4xl md:text-5xl font-serif italic opacity-50">Joined Purrquinox</h3>
                        </div>

                        <div className="w-px h-45 bg-linear-to-b from-orange-400 to-transparent hidden md:block" />
                        <div className="flex-1" />
                    </div>
                </div>
            </section>
            <section className="dark:bg-black py-10 px-6">
                <div className="mx-auto max-w-7xl">
                    <div className="flex flex-col mb-12 items-centerjustify-between">
                        <p className="font-serif   pb-7 text-orange-400 uppercase tracking-wider">03 — Recreation</p>
                        <h1 className="font-serif text-4xl pb-4 md:text-6xl sm:text-5xl">Cinematic
                            <span className="italic pb-12 opacity-50"> Influence.</span>
                        </h1>
                        <div className="flex flex-col md:flex-row gap-12">
                            <div>
                                <p className="text-xl font-sans opacity-50">
                                    The shows/movies that moved me and shaped my personality.
                                </p>
                            </div>
                            <div className="md:ml-auto">
                                <p className="text-sm font-sans uppercase opacity-50">9 curated masterpieces</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 items-center md:grid-cols-2 lg:grid-cols-3 gap-5">
                        <Box bg="#b91c1cD9" name="Silicon Valley" genre="sitcom | comedy" rating={8} />
                        <Box bg="#fed7aa80" name="The Office" genre="sitcom | comedy" rating={9} />
                        <Box bg="#ec4899ff" name="Fight Club" genre="thriller | action" rating={12} />
                        <Box bg="#a21cafff" name="La La Land" genre="romance | musical" rating={10} />
                        <Box bg="#d97706ff" name="Seven Deadly Sins" genre="anime | fantasy" rating={8} />
                        <Box bg="#fde047cc" name="The Treasure of Foggy Mountain" genre="comedy | adventure" rating={6} />
                        <Box bg="00AEEFFF" name="Nightcrawler" genre="thriller | crime" rating={11} />
                        <Box bg="#10b981ff" name="Shameless" genre="dramedy" rating={10} />
                        <Box bg="#f4f4f50d" name="Batman Beyond" genre="superhero | action" rating={9} />
                    </div>
                </div>
            </section>
        </div>
    );
}

/*Animations somehow:

i used uh  
 useScroll,  useTransform, "framer-motion";
  which i sa motion/animation lib what i did was 

  // We use [0.1, 0.5, 0.9] range to ensure it stays white for a bit in the middle
  const color = useTransform(
    scrollYProgress,
    [0.2, 0.5, 0.8],
    ["rgba(255,255,255,0.05)", "rgba(255,255,255,1)", "rgba(255,255,255,0.05)"],
  ); 
so like u see the white thing whe nu scroll it the so it ison the Y progress on the other side then i scaled the text   const scale = useTransform(
  
 scrollYProgress,
    [0.2, 0.5, 0.8],
    [0.95, 1.05, 0.95],
  ); 
so you see it getting big  i scalled to around the shift of the y axis to then i just added it lol
return (
    <motion.div
      ref={ref}
      style={{ scale }}
      className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-12 items-center`}
    >
      <div className="flex-1 text-center md:text-left">
        <motion.span
          style={{ color }}
          className="text-7xl sm:text-8xl md:text-[12rem] font-serif italic block mb-4 transition-colors duration-500"
        >
          {item.year}
        </motion.span>
        <motion.h3
          style={{
            opacity: useTransform(
              scrollYProgress,
              [0.3, 0.5, 0.7],
              [0.3, 1, 0.3],
            ),
          }}
          className="text-4xl md:text-5xl font-light tracking-tight"
        >
          {item.event}
        </motion.h3>
      </div>
      <div className="w-px h-64 bg-gradient-to-b from-[#2563eb] to-transparent hidden md:block" />
      <div className="flex-1" />
    </motion.div>
  );
}

 simple as that if u see i used an aditional tranfrom for the opacity bc i likd it to when scrolled down the above text obaclity fo down yeah and its just a matter of
 const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
 definign the start end and end start bc it register the other item the other event as the end of the svent above it and the start of a new event as well
 */