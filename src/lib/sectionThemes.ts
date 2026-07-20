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

export const sectionThemes: Record<SectionId, SectionTheme> = {
  home: {
    label: "text-ocean-400",
    subheading: "text-violet-400",
    heading: "heading-gradient-ocean",
    sectionBg: "section-bg-home",
    blobPrimary: "bg-ocean-400/20",
    blobSecondary: "bg-violet-400/18",
    navActive: "bg-ocean-500/20 text-ocean-300",
    navHover: "hover:text-ocean-400",
    cardHover: "hover:border-ocean-500/40",
    buttonPrimary: "from-ocean-600 via-teal-500 to-violet-500",
    buttonOutline: "hover:border-ocean-400 hover:text-ocean-300",
  },
  profile: {
    label: "text-violet-400",
    subheading: "text-rose-400",
    heading: "heading-gradient-violet",
    sectionBg: "section-bg-profile",
    blobPrimary: "bg-violet-400/20",
    blobSecondary: "bg-rose-400/18",
    navActive: "bg-violet-500/20 text-violet-300",
    navHover: "hover:text-violet-400",
    cardHover: "hover:border-violet-500/40",
    buttonPrimary: "from-violet-600 via-fuchsia-500 to-rose-500",
    buttonOutline: "hover:border-violet-400 hover:text-violet-300",
  },
  about: {
    label: "text-coral-400",
    subheading: "text-amber-400",
    heading: "heading-gradient-coral",
    sectionBg: "section-bg-about",
    blobPrimary: "bg-coral-400/20",
    blobSecondary: "bg-amber-400/18",
    navActive: "bg-coral-500/20 text-coral-300",
    navHover: "hover:text-coral-400",
    cardHover: "hover:border-coral-500/40",
    buttonPrimary: "from-coral-500 via-amber-500 to-orange-500",
    buttonOutline: "hover:border-coral-400 hover:text-coral-300",
  },
  projects: {
    label: "text-emerald-400",
    subheading: "text-teal-400",
    heading: "heading-gradient-emerald",
    sectionBg: "section-bg-projects",
    blobPrimary: "bg-emerald-400/20",
    blobSecondary: "bg-teal-400/18",
    navActive: "bg-emerald-500/20 text-emerald-300",
    navHover: "hover:text-emerald-400",
    cardHover: "hover:border-emerald-500/40",
    buttonPrimary: "from-emerald-600 via-teal-500 to-cyan-500",
    buttonOutline: "hover:border-emerald-400 hover:text-emerald-300",
  },
  skills: {
    label: "text-amber-400",
    subheading: "text-orange-400",
    heading: "heading-gradient-amber",
    sectionBg: "section-bg-skills",
    blobPrimary: "bg-amber-400/20",
    blobSecondary: "bg-orange-400/18",
    navActive: "bg-amber-500/20 text-amber-300",
    navHover: "hover:text-amber-400",
    cardHover: "hover:border-amber-500/40",
    buttonPrimary: "from-amber-500 via-orange-500 to-coral-500",
    buttonOutline: "hover:border-amber-400 hover:text-amber-300",
  },
  achievements: {
    label: "text-rose-400",
    subheading: "text-indigo-400",
    heading: "heading-gradient-rose",
    sectionBg: "section-bg-achievements",
    blobPrimary: "bg-rose-400/20",
    blobSecondary: "bg-indigo-400/18",
    navActive: "bg-rose-500/20 text-rose-300",
    navHover: "hover:text-rose-400",
    cardHover: "hover:border-rose-500/40",
    buttonPrimary: "from-rose-500 via-fuchsia-500 to-indigo-500",
    buttonOutline: "hover:border-rose-400 hover:text-rose-300",
  },
};

export const cardAccents = [
  {
    border: "border-t-ocean-500",
    hover: "hover:border-ocean-500/50",
    text: "text-ocean-400",
    titleHover: "group-hover:text-ocean-400",
    outline: "hover:border-ocean-400 hover:text-ocean-300",
  },
  {
    border: "border-t-violet-500",
    hover: "hover:border-violet-500/50",
    text: "text-violet-400",
    titleHover: "group-hover:text-violet-400",
    outline: "hover:border-violet-400 hover:text-violet-300",
  },
  {
    border: "border-t-emerald-500",
    hover: "hover:border-emerald-500/50",
    text: "text-emerald-400",
    titleHover: "group-hover:text-emerald-400",
    outline: "hover:border-emerald-400 hover:text-emerald-300",
  },
  {
    border: "border-t-amber-500",
    hover: "hover:border-amber-500/50",
    text: "text-amber-400",
    titleHover: "group-hover:text-amber-400",
    outline: "hover:border-amber-400 hover:text-amber-300",
  },
  {
    border: "border-t-rose-500",
    hover: "hover:border-rose-500/50",
    text: "text-rose-400",
    titleHover: "group-hover:text-rose-400",
    outline: "hover:border-rose-400 hover:text-rose-300",
  },
  {
    border: "border-t-teal-500",
    hover: "hover:border-teal-500/50",
    text: "text-teal-400",
    titleHover: "group-hover:text-teal-400",
    outline: "hover:border-teal-400 hover:text-teal-300",
  },
  {
    border: "border-t-coral-500",
    hover: "hover:border-coral-500/50",
    text: "text-coral-400",
    titleHover: "group-hover:text-coral-400",
    outline: "hover:border-coral-400 hover:text-coral-300",
  },
  {
    border: "border-t-indigo-500",
    hover: "hover:border-indigo-500/50",
    text: "text-indigo-400",
    titleHover: "group-hover:text-indigo-400",
    outline: "hover:border-indigo-400 hover:text-indigo-300",
  },
] as const;

export function getCardAccent(index: number) {
  return cardAccents[index % cardAccents.length];
}
