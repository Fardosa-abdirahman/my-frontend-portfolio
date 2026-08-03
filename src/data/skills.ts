export interface Skill {
  name: string;
  description: string;
  logo: string;
  color: string;
}

export const skills: Skill[] = [
  {
    name: "React",
    description:
      "Component-driven UIs with hooks, state management, and reusable patterns.",
    logo: "/images/skills/react.svg",
    color: "#61DAFB",
  },
  {
    name: "TypeScript",
    description:
      "Typed JavaScript for safer, more maintainable frontend applications.",
    logo: "/images/skills/typescript.svg",
    color: "#3178C6",
  },
  {
    name: "JavaScript",
    description:
      "Core language skills including ES6+, DOM work, and asynchronous programming.",
    logo: "/images/skills/javascript.svg",
    color: "#F7DF1E",
  },
  {
    name: "Tailwind CSS",
    description:
      "Utility-first styling for fast, consistent, and maintainable UI development.",
    logo: "/images/skills/tailwindcss.svg",
    color: "#38BDF8",
  },
  {
    name: "HTML",
    description:
      "Semantic markup and accessible page structure for modern web applications.",
    logo: "/images/skills/html5.svg",
    color: "#E34F26",
  },
  {
    name: "CSS",
    description:
      "Responsive layouts, Flexbox, Grid, and polished visual design fundamentals.",
    logo: "/images/skills/css3.svg",
    color: "#1572B6",
  },
  {
    name: "Git & GitHub",
    description:
      "Version control, branching workflows, pull requests, and collaboration.",
    logo: "/images/skills/git.svg",
    color: "#F05032",
  },
  {
    name: "Node.js",
    description:
      "Server-side JavaScript for APIs, tooling, and full-stack application logic.",
    logo: "/images/skills/nodejs.svg",
    color: "#339933",
  },
  {
    name: "MySQL",
    description:
      "Relational database design, queries, and structured data management.",
    logo: "/images/skills/mysql.svg",
    color: "#4479A1",
  },
  {
    name: "MongoDB",
    description:
      "Document-oriented data modeling and flexible NoSQL database workflows.",
    logo: "/images/skills/mongodb.svg",
    color: "#47A248",
  },
];
