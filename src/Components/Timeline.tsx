export default function Timeline({ date, text }: { date: string, text: string }) {
    return (
        <div className="pb-8 grid gap-0 grid-cols-12">
            <div className="relative mt-[.5px] left-0 top-2 bg-orange-400 rounded-full w-1.75 h-1.75 col-span-1" />
            <div className="col-span-11">
                <p className="font-serif text-orange-400 uppercase tracking-widest pb-2 col-span-11">{date}</p>
                <p className="font-serif text-xl">{text}</p>
            </div>
        </div>
    );
}