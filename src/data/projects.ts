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
        options: ["working"],
        num: 1,
        url: "https://antiraid.xyz/",
    },
    {
        name: "Purrquinox",
        desc: "software development organization.",
        date: 2025,
        options: ["working"],
        num: 2,
        url: "https://purrquinox.com/",
    },
];
