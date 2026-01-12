import { IconType } from "react-icons";

type Props = {
    icon: IconType;
    m_text: string;
    l_text: string;
}

export default function BoxesHome({icon: Icon, m_text: M, l_text: L}: Props) {
    return (
        <div className="flex items-center flex-col gap-2">
            <div className="z-10 flex items-center align-middle border p-3 bg-white/5 border-white/7 rounded-2xl">
                <Icon color="orange" className="size-5"/>
            </div>
            <div>
                <p className="text-5xl font-serif pb-3">{M}</p>
                <p className="text-sm opacity-50 uppercase">{L}</p>
            </div>
        </div>
    );
}   