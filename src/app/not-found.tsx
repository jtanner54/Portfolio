import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen dark:bg-black px-6">
            <div className="absolute inset-0 h-screen w-full bg-[radial-gradient(circle,#dddddd_2px,transparent_1px)] bg-size-[30px_30px] sm:bg-size-[40px_40px]">
                <div className="overflow-hidden absolute inset-0 bg-radial-[at_50%_50%] from-transparent to-black to-75%" />
            </div>

            <div className="relative text-center">
                <p className="font-serif text-orange-400 pb-10 uppercase tracking-wider">Page Not Found</p>

                <h1 className="font-serif text-8xl md:text-[12rem] mb-5">
                    4<span className="italic opacity-50">0</span>4
                </h1>

                <p className="text-xl font-sans pb-10 opacity-50 max-w-md mx-auto">
                    The page you&apos;re looking for doesn&apos;t exist or has been moved.
                </p>

                <Link
                    href="/"
                    className="hover:bg-orange-400 hover:border-orange-400 hover:text-white cursor-pointer bg-white border rounded-full text-black px-9 py-3 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 inline-block"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
}
