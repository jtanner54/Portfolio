import { FaTv } from "react-icons/fa";

export default function Box({bg, name, genre, rating}: {bg: string, name: string, genre: string, rating: number}) {    
    return (
        <div style={{ backgroundColor: bg }} className={`border border-zinc-100/5 rounded-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105`}>
            <div className="flex flex-row items-center justify-between">
                <div className="ml-4 border-gray-700/40 border rounded-2xl h-15 bg-gray-700/20">
                    <FaTv color="blue" className="m-3 size-8 " />
                </div>
                <div className="p-5">
                    <p className="text-2xl">{name}</p>
                    <p className="text-sm font-sans uppercase opacity-90">{genre}</p>
                </div>
                <div>
                    <p className="p-5">{rating}/10</p>
                </div>
            </div>
        </div>
    );
}