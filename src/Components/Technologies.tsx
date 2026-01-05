function Lines({filled}: {filled: number}) {
    return (
        <div className="flex gap-2 ">
            {Array.from({length: 5}).map((_, i) => {
                return ((5 - (filled) > 0) && ((i + 1) > filled)) ? <div key={i} className="bg-transparent border border-orange-400 rounded-full w-8 h-2" /> : <div key={i} className="bg-orange-400 border border-orange-400 rounded-full w-8 h-2" />
            })}
        </div>
    );
}

export default function TechGroup({ src, name, desc, level }: { src: string, name: string, desc: string, level: number}) {
    return (
        <div className="flex flex-col overflow-hidden bg-white/5 border border-white/10 rounded-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <div className="flex items-start gap-4 p-5">
                <img width="50" height="50" src={`https://skillicons.dev/icons?i=${src}`} />

                <div className="flex flex-col">
                    <span className="text-2xl font-serif -mt-1 pb-2">{name}</span>
                    <Lines filled={level} />
                </div>
            </div>
            <div className="text-xl font-serif pl-5 pb-5 w-85"> 
                {desc}
            </div>
        </div>
    );
}