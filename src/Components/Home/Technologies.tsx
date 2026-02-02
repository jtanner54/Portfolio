'use client';

import { useState } from 'react';

function Lines({ filled }: { filled: number }) {
    return (
        <div className="flex gap-2" role="img" aria-label={`Skill level ${filled} out of 5`}>
            {Array.from({ length: 5 }).map((_, i) => {
                const isFilled = i < filled;
                return (
                    <div
                        key={i}
                        className={isFilled
                            ? "bg-orange-400 border border-orange-400 rounded-full w-[25px] h-[10px]"
                            : "bg-transparent border border-orange-400 rounded-full w-[22.5px] h-[10px]"
                        }
                        aria-hidden="true"
                    />
                );
            })}
        </div>
    );
}

type TechGroupProps = {
    src: string;
    name: string;
    desc: string;
    level: number;
};

export default function TechGroup({ src, name, desc, level }: TechGroupProps) {
    const [imgError, setImgError] = useState(false);

    return (
        <div className="flex flex-col overflow-auto bg-white/5 border border-white/10 rounded-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <div className="flex items-start gap-4 p-5">
                {imgError ? (
                    <div
                        className="w-[50px] h-[50px] bg-white/10 rounded-lg flex items-center justify-center"
                        aria-hidden="true"
                    >
                        <span className="text-xl font-serif">{name.charAt(0)}</span>
                    </div>
                ) : (
                    <img
                        width={50}
                        height={50}
                        src={`https://skillicons.dev/icons?i=${src}`}
                        alt={`${name} logo`}
                        onError={() => setImgError(true)}
                        loading="lazy"
                    />
                )}

                <div className="flex flex-col">
                    <span className="text-2xl font-serif -mt-1 pb-2">{name}</span>
                    <Lines filled={level} />
                </div>
            </div>
            <div className="text-xl font-serif px-5 pb-2">
                {desc}
            </div>
        </div>
    );
}
