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

const lightTheme: SectionTheme = {
  label: "text-accent",
  subheading: "text-muted",
  heading: "text-ink",
  sectionBg: "section-light",
  blobPrimary: "bg-accent/20",
  blobSecondary: "bg-accent-glow/15",
  navActive: "bg-accent text-white",
  navHover: "hover:text-accent",
  cardHover: "hover:border-accent/40",
  buttonPrimary: "bg-accent hover:bg-accent-hover",
  buttonOutline: "hover:border-accent hover:text-accent",
};

const darkTheme: SectionTheme = {
  ...lightTheme,
  heading: "text-white",
  subheading: "text-muted-light",
  sectionBg: "section-dark",
};

export const sectionThemes: Record<SectionId, SectionTheme> = {
  home: { ...lightTheme, sectionBg: "section-light" },
  about: { ...lightTheme, sectionBg: "section-light-soft" },
  skills: { ...darkTheme, sectionBg: "section-dark" },
  projects: { ...lightTheme, sectionBg: "section-light" },
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

export function getCardAccent(_index: number) {
  return cardAccents[0];
}
