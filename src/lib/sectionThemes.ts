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

const orangeTheme: SectionTheme = {
  label: "text-accent",
  subheading: "text-muted",
  heading: "text-ink",
  sectionBg: "",
  blobPrimary: "bg-accent/20",
  blobSecondary: "bg-accent-glow/15",
  navActive: "bg-accent text-white",
  navHover: "hover:text-accent",
  cardHover: "hover:border-accent/40",
  buttonPrimary: "bg-accent hover:bg-accent-hover",
  buttonOutline: "hover:border-accent hover:text-accent",
};

export const sectionThemes: Record<SectionId, SectionTheme> = {
  home: { ...orangeTheme, sectionBg: "bg-paper" },
  about: {
    ...orangeTheme,
    heading: "text-white",
    subheading: "text-muted-light",
    sectionBg: "section-dark",
  },
  skills: {
    ...orangeTheme,
    heading: "text-white",
    subheading: "text-muted-light",
    sectionBg: "section-dark-texture",
  },
  projects: {
    ...orangeTheme,
    sectionBg: "bg-paper-soft",
  },
  achievements: {
    ...orangeTheme,
    heading: "text-white",
    subheading: "text-muted-light",
    sectionBg: "section-dark",
  },
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
