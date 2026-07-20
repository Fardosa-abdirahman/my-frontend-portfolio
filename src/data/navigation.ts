import type { NavLink } from "../types";

export const sectionIds = [
  "home",
  "profile",
  "about",
  "projects",
  "skills",
  "achievements",
] as const;

export type SectionId = (typeof sectionIds)[number];

export const navLinks: NavLink[] = [
  { name: "Home", href: "#home" },
  { name: "Profile", href: "#profile" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Achievements", href: "#achievements" },
];

export function scrollToSection(id: SectionId | string) {
  const target = document.getElementById(id.replace(/^#/, ""));
  target?.scrollIntoView({ behavior: "smooth", block: "start" });
}
