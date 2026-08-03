import type { Skill } from "../../data/skills";
import { cn } from "../../utils/cn";

interface SkillCardProps {
  skill: Skill;
  index?: number;
}

const cardThemes = [
  {
    orb: "from-orange-500 to-amber-300",
    border: "border-t-orange-400",
    hoverBorder: "hover:border-orange-400/40",
    titleHover: "group-hover:text-orange-300",
    glow: "bg-orange-500/20",
  },
  {
    orb: "from-sky-500 to-cyan-300",
    border: "border-t-sky-400",
    hoverBorder: "hover:border-sky-400/40",
    titleHover: "group-hover:text-sky-300",
    glow: "bg-sky-500/20",
  },
  {
    orb: "from-teal-500 to-emerald-300",
    border: "border-t-teal-400",
    hoverBorder: "hover:border-teal-400/40",
    titleHover: "group-hover:text-teal-300",
    glow: "bg-teal-500/20",
  },
  {
    orb: "from-yellow-400 to-amber-200",
    border: "border-t-yellow-400",
    hoverBorder: "hover:border-yellow-400/40",
    titleHover: "group-hover:text-yellow-300",
    glow: "bg-yellow-400/20",
  },
  {
    orb: "from-cyan-500 to-blue-300",
    border: "border-t-cyan-400",
    hoverBorder: "hover:border-cyan-400/40",
    titleHover: "group-hover:text-cyan-300",
    glow: "bg-cyan-500/20",
  },
  {
    orb: "from-blue-500 to-indigo-300",
    border: "border-t-blue-400",
    hoverBorder: "hover:border-blue-400/40",
    titleHover: "group-hover:text-blue-300",
    glow: "bg-blue-500/20",
  },
  {
    orb: "from-rose-500 to-orange-300",
    border: "border-t-rose-400",
    hoverBorder: "hover:border-rose-400/40",
    titleHover: "group-hover:text-rose-300",
    glow: "bg-rose-500/20",
  },
  {
    orb: "from-lime-500 to-green-300",
    border: "border-t-lime-400",
    hoverBorder: "hover:border-lime-400/40",
    titleHover: "group-hover:text-lime-300",
    glow: "bg-lime-500/20",
  },
  {
    orb: "from-amber-500 to-yellow-300",
    border: "border-t-amber-400",
    hoverBorder: "hover:border-amber-400/40",
    titleHover: "group-hover:text-amber-300",
    glow: "bg-amber-500/20",
  },
  {
    orb: "from-emerald-500 to-teal-300",
    border: "border-t-emerald-400",
    hoverBorder: "hover:border-emerald-400/40",
    titleHover: "group-hover:text-emerald-300",
    glow: "bg-emerald-500/20",
  },
];

export default function SkillCard({ skill, index = 0 }: SkillCardProps) {
  const theme = cardThemes[index % cardThemes.length];

  return (
    <article
      className={cn(
        "group glass-card relative flex h-full flex-col overflow-hidden rounded-[28px] border-t-4 p-7 transition-all duration-500",
        "hover:-translate-y-2 hover:bg-white/12",
        theme.border,
        theme.hoverBorder
      )}
    >
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full blur-2xl transition-opacity duration-500 group-hover:opacity-100",
          theme.glow,
          "opacity-50"
        )}
      />

      <div
        aria-hidden
        className={cn(
          "relative mb-6 h-16 w-16 bg-gradient-to-br opacity-90 shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6",
          theme.orb
        )}
        style={{
          borderRadius: "40% 60% 55% 45% / 55% 40% 60% 45%",
        }}
      />

      <h3
        className={cn(
          "relative font-display text-xl font-bold text-white transition-colors duration-300",
          theme.titleHover
        )}
      >
        {skill.name}
      </h3>

      <p className="relative mt-3 flex-1 text-sm leading-relaxed text-white/60">
        {skill.description}
      </p>
    </article>
  );
}
