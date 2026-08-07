export interface Skill {
  name: string;
  description: string;
  logo: string;
  color: string;
  /** Skill level indicator 0–100 */
  level: number;
  /** Whether this is a highlighted/main skill */
  featured?: boolean;
}

export type SkillCategoryName = "Frontend" | "Backend" | "Database" | "Tools";

export interface SkillCategory {
  category: SkillCategoryName;
  icon: string;
  description: string;
  skills: Skill[];
}

export const skills: Skill[] = [
  {
    name: "React",
    description:
      "Component-driven UIs with hooks, state management, and reusable patterns.",
    logo: "/images/skills/react.svg",
    color: "#61DAFB",
    level: 90,
    featured: true,
  },
  {
    name: "TypeScript",
    description:
      "Typed JavaScript for safer, more maintainable frontend applications.",
    logo: "/images/skills/typescript.svg",
    color: "#3178C6",
    level: 85,
    featured: true,
  },
  {
    name: "JavaScript",
    description:
      "Core language skills including ES6+, DOM work, and asynchronous programming.",
    logo: "/images/skills/javascript.svg",
    color: "#F7DF1E",
    level: 88,
    featured: true,
  },
  {
    name: "Tailwind CSS",
    description:
      "Utility-first styling for fast, consistent, and maintainable UI development.",
    logo: "/images/skills/tailwindcss.svg",
    color: "#38BDF8",
    level: 82,
  },
  {
    name: "HTML",
    description:
      "Semantic markup and accessible page structure for modern web applications.",
    logo: "/images/skills/html5.svg",
    color: "#E34F26",
    level: 92,
  },
  {
    name: "CSS",
    description:
      "Responsive layouts, Flexbox, Grid, and polished visual design fundamentals.",
    logo: "/images/skills/css3.svg",
    color: "#1572B6",
    level: 85,
  },
  {
    name: "Git & GitHub",
    description:
      "Version control, branching workflows, pull requests, and collaboration.",
    logo: "/images/skills/git.svg",
    color: "#F05032",
    level: 80,
  },
  {
    name: "Node.js",
    description:
      "Server-side JavaScript for APIs, tooling, and full-stack application logic.",
    logo: "/images/skills/nodejs.svg",
    color: "#339933",
    level: 78,
  },
  {
    name: "MySQL",
    description:
      "Relational database design, queries, and structured data management.",
    logo: "/images/skills/mysql.svg",
    color: "#4479A1",
    level: 75,
  },
  {
    name: "MongoDB",
    description:
      "Document-oriented data modeling and flexible NoSQL database workflows.",
    logo: "/images/skills/mongodb.svg",
    color: "#47A248",
    level: 72,
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    icon: "🎨",
    description:
      "Designing and building fast, accessible, and interactive user interfaces.",
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
    ].map((name) => skills.find((s) => s.name === name)!),
  },
  {
    category: "Backend",
    icon: "⚙️",
    description:
      "Writing server-side logic, APIs, and business logic that power the frontend.",
    skills: ["Node.js"].map((name) => skills.find((s) => s.name === name)!),
  },
  {
    category: "Database",
    icon: "🗄️",
    description:
      "Modeling, querying, and managing structured and unstructured data.",
    skills: ["MySQL", "MongoDB"].map((name) => skills.find((s) => s.name === name)!),
  },
  {
    category: "Tools",
    icon: "🛠️",
    description:
      "Everyday tools and workflows that keep development efficient and collaborative.",
    skills: ["Git & GitHub"].map((name) => skills.find((s) => s.name === name)!),
  },
];
