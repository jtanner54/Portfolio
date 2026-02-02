import Link from "next/link";

type Props = {
    name: string;
    desc: string;
    date: number;
    options: string[];
    num: number;
    url: string;
}

const ProjBoxes = ({ options }: { options: string[] }) => {
    return (
        <div className="flex gap-5">
            {options.map((item) => (
                <span key={item} className="font-serif border-2 text-sm tracking-widest text-orange-400 border-orange-400/30 bg-[#2563eb]/5 rounded-full p-2 uppercase ">{item}</span>
            ))}
        </div>
    );
}

export default function ProjBox({ name, desc, date, options, num, url }: Props) {
    return (
        <Link href={url} target="_blank" aria-label={`View ${name} project`}>
            <div className="flex flex-col sm:flex-col lg:flex-row lg:items-center gap-5">
                <div className="flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-20">
                    <div className="flex gap-2">
                        <p className="font-sans tracking-wide opacity-50">{date} </p>
                        <p className="font-sans opacity-30">—</p>
                        <span className="tracking-widest font-serif text-orange-400"> P.{num}</span>
                    </div>

                    <div className="flex flex-col transition duration-300 ease-in-out transform hover:translate-x-5 hover:scale-105">
                        <div className="font-serif font-bold tracking-wider text-4xl">
                            {name}
                        </div>
                        <div className="opacity-50 font-serif tracking-wide uppercase">
                            {desc}
                        </div>
                    </div>
                </div>

                <div className="lg:ml-auto">
                    <div>
                        <ProjBoxes options={options} />
                    </div>
                </div>
            </div>
        </Link>
    );
}
