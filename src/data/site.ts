export const siteConfig = {
    name: "Jack Tanner",
    title: "Jack Tanner | Full-Stack Developer & Software Engineer",
    description: "Jack Tanner is a passionate full-stack developer and software engineer specializing in React, TypeScript, Node.js, and modern web technologies.",
    url: "https://jacktanner.dev",
    email: "jtanner0786@gmail.com",
    social: {
        github: "https://github.com/jtanner54",
        linkedin: "https://www.linkedin.com/in/jack-tanner-828456339/",
        twitter: "@jacktanner",
    },
    location: "USA, EST",
    tagline: {
        primary: "Thoughtful engineering. Intentional design.",
        secondary: "Codecrafted",
    },
} as const;

export type SiteConfig = typeof siteConfig;
