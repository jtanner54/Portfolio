import { FaTv } from "react-icons/fa";

export default function Box({ bg, name, genre, rating }: { bg: string, name: string, genre: string, rating: number }) {
    return (
        <div style={{ backgroundColor: bg }} className={`border border-zinc-100/5 rounded-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105`}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between">
                <div className="flex gap-5 m-3 items-center">
                    <div className="border-gray-700/40 border rounded-2xl bg-gray-700/20">
                        <FaTv color="blue" className="m-3 size-8 " />
                    </div>
                    <div>
                        <p className="text-2xl">{name}</p>
                        <p className="text-sm font-sans uppercase opacity-90">{genre}</p>
                    </div>
                </div>
                <div className="flex gap-3.5 mx-3 my-1 items-center">
                    <p className="sm:hidden font-serif tracking-widest">Rating: </p>
                    <p className="">{rating}/10</p>
                </div>
            </div>
        </div>
    );
}