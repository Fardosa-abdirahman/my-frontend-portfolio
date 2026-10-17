import type { NavLink } from "../types";

export const CV_URL =
  "https://1drv.ms/w/c/CFEDDAC18F06A479/IQBz0G_xqBvbSJGBOUB05E6wAeeDtMr4vXz0qtZNb_gmwQQ?e=o6M9hH";

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
  { name: "Resume", href: CV_URL },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#achievements" },
];

export const navLinks: NavLink[] = [...navLinksLeft, ...navLinksRight];

export function scrollToSection(id: SectionId | string) {
  const target = document.getElementById(id.replace(/^#/, ""));
  target?.scrollIntoView({ behavior: "smooth", block: "start" });
}
