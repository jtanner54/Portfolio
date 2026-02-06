export type Project = {
    name: string;
    desc: string;
    date: number;
    options: string[];
    num: number;
    url: string;
};

export const projects: Project[] = [
    {
        name: "AntiRaid",
        desc: "the most advanced anti-raid solution.",
        date: 2020,
        options: ["working", "backend"],
        num: 1,
        url: "https://antiraid.xyz/",
    },
    {
        name: "Purrquinox",
        desc: "software development organization.",
        date: 2025,
        options: ["working", "Lead Architect Designer", "Lead DevOps"],
        num: 2,
        url: "https://purrquinox.com/",
    },
    {
        name: "ByteBrush Studios",
        desc: "Merge art and technology into something extraordinary.",
        date: 2025,
        options: ["developer"],
        num: 3,
        url: "https://bytebrush.dev/"
    },
    {
        name: "Tsenta (Y Combinator)",
        desc: "Job automation to save time.",
        date: 2026,
        options: ["Software Developer Intern"],
        num: 4,
        url: "https://www.tsenta.com/",
    }
];
