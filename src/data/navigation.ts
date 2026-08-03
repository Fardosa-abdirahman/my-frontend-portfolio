import type { NavLink } from "../types";

export const sectionIds = [
  "home",
  "about",
  "skills",
  "projects",
  "achievements",
] as const;

export type SectionId = (typeof sectionIds)[number];

export const navLinksLeft: NavLink[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
];

export const navLinksRight: NavLink[] = [
  { name: "Resume", href: "/cv.pdf" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#achievements" },
];

export const navLinks: NavLink[] = [...navLinksLeft, ...navLinksRight];

export function scrollToSection(id: SectionId | string) {
  const target = document.getElementById(id.replace(/^#/, ""));
  target?.scrollIntoView({ behavior: "smooth", block: "start" });
}
