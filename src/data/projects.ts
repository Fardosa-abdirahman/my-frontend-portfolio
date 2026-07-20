import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "portfolio",
    name: "Portfolio Website",
    description:
      "Personal portfolio built with React, TypeScript, and Tailwind CSS to showcase skills and projects.",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    liveUrl: "/",
    githubUrl: "https://github.com/",
  },
  {
    id: "todo-app",
    name: "Todo App",
    description:
      "Task management app with a clean UI, local persistence, and intuitive interactions.",
    stack: ["React", "TypeScript"],
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
    githubUrl: "https://github.com/",
  },
  {
    id: "weather-app",
    name: "Weather App",
    description:
      "Real-time weather lookups with API integration and a simple, readable interface.",
    stack: ["React", "API"],
    image:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&q=80",
    githubUrl: "https://github.com/",
  },
];
