import type { SectionId } from "../data/navigation";

export type SectionTheme = {
  label: string;
  subheading: string;
  heading: string;
  sectionBg: string;
  blobPrimary: string;
  blobSecondary: string;
  navActive: string;
  navHover: string;
  cardHover: string;
  buttonPrimary: string;
  buttonOutline: string;
};

const darkTheme: SectionTheme = {
  label: "text-gradient",
  subheading: "text-muted",
  heading: "text-white",
  sectionBg: "section-dark",
  blobPrimary: "bg-accent/20",
  blobSecondary: "bg-accent-blue/15",
  navActive: "bg-gradient-to-r from-accent to-accent-blue text-white",
  navHover: "hover:text-white",
  cardHover: "hover:border-accent/40",
  buttonPrimary:
    "bg-gradient-to-r from-accent to-accent-blue hover:from-accent-hover hover:to-accent-blue",
  buttonOutline: "hover:border-accent hover:text-accent",
};

const darkSoftTheme: SectionTheme = {
  ...darkTheme,
  sectionBg: "section-dark-soft",
};

export const sectionThemes: Record<SectionId, SectionTheme> = {
  home: { ...darkTheme, sectionBg: "section-dark" },
  about: { ...darkSoftTheme, sectionBg: "section-dark-soft" },
  skills: { ...darkTheme, sectionBg: "section-dark" },
  projects: { ...darkSoftTheme, sectionBg: "section-dark-soft" },
  achievements: { ...darkTheme, sectionBg: "section-dark" },
};

export const cardAccents = [
  {
    border: "border-t-accent",
    hover: "hover:border-accent/50",
    text: "text-accent",
    titleHover: "group-hover:text-accent",
    outline: "hover:border-accent hover:text-accent",
  },
] as const;

export function getCardAccent(index: number) {
  return cardAccents[index % cardAccents.length];
}
