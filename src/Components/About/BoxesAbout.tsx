import { FaTv } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

export default function Box({ bg, name, genre, rating }: { bg: string, name: string, genre: string, rating: number }) {
    return (
        <div style={{ backgroundColor: bg }} className="border border-zinc-100/5 rounded-2xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-[1.02]">
            <div className="flex items-center justify-between gap-2 p-3">
                <div className="flex gap-3 items-center min-w-0 flex-1">
                    <div className="border-gray-700/40 border rounded-xl bg-gray-700/20 flex-shrink-0">
                        <FaTv color="blue" className="m-2.5 size-6 sm:size-7" />
                    </div>
                    <div className="min-w-0 flex-1">
                        <p className="text-lg sm:text-xl font-medium break-words hyphens-auto" lang="en">{name}</p>
                        <p className="text-xs sm:text-sm font-sans uppercase opacity-70 truncate">{genre}</p>
                    </div>
                </div>
                <div className="flex items-center gap-1.5 flex-shrink-0 bg-black/20 rounded-lg px-2.5 py-1.5">
                    <span className="text-sm font-medium tabular-nums">{rating}/10</span>
                </div>
            </div>
        </div>
    );
}