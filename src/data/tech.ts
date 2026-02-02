export type TechCategory = "Frontend" | "Backend" | "Tools" | "Database & Storage";

export type Tech = {
    src: string;
    name: string;
    desc: string;
    level: number;
    category: TechCategory;
};

export const techCategories: TechCategory[] = ["Frontend", "Backend", "Tools", "Database & Storage"];

export const techInfo: Tech[] = [
    { src: "css", name: "CSS", desc: "Advanced styling including Flexbox, Grid, and CSS animations", level: 5, category: "Frontend" },
    { src: "ts", name: "TypeScript", desc: "Developing type-safe applications with TypeScript for improved code quality and developer experience.", level: 3, category: "Frontend" },
    { src: "js", name: "JavaScript", desc: "Experience with modern JavaScript (ES6+) features and patterns.", level: 4, category: "Frontend" },
    { src: "react", name: "React", desc: "Building complex, interactive UIs with React and its ecosystem including hooks, context, and state management libraries.", level: 3, category: "Frontend" },
    { src: "html", name: "HTML", desc: "Semantic markup and accessible web development.", level: 5, category: "Frontend" },
    { src: "tailwind", name: "Tailwind CSS", desc: "Rapid UI development using utility classes and customizing design systems.", level: 4, category: "Frontend" },
    { src: "nodejs", name: "Node.js", desc: "Building server-side applications and APIs with JavaScript/TypeScript.", level: 3, category: "Backend" },
    { src: "go", name: "Go", desc: "Developing high-performance microservices and APIs.", level: 2, category: "Backend" },
    { src: "python", name: "Python", desc: "Server-side development and automation scripting.", level: 4, category: "Backend" },
    { src: "java", name: "Java", desc: "Backend development as well as data structure implementation.", level: 5, category: "Backend" },
    { src: "htmx", name: "REST API", desc: "Designing and implementing RESTful services following best practices.", level: 4, category: "Backend" },
    { src: "flask", name: "Flask", desc: "Python framework for server-side logic, process requests, and creating APIs", level: 3, category: "Backend" },
    { src: "github", name: "GitHub", desc: "Collaborative development using pull requests, issues, and project management.", level: 5, category: "Tools" },
    { src: "git", name: "Git", desc: "Version control and collaborative development workflows.", level: 4, category: "Tools" },
    { src: "vscode", name: "VS Code", desc: "Primary code editor with advanced extensions and customizations.", level: 4, category: "Tools" },
    { src: "mysql", name: "MySQL", desc: "Relational database management and optimization.", level: 3, category: "Database & Storage" },
    { src: "postgres", name: "PostgreSQL", desc: "Relational database design, optimization, and advanced queries.", level: 3, category: "Database & Storage" },
];
