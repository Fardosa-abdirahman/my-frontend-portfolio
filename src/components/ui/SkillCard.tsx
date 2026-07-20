import type { Certificate } from "../../types";
import { cn } from "../../utils/cn";
import Button from "./Button";

interface SkillCardProps {
  certificate: Certificate;
  index?: number;
}

const cardStyles = [
  {
    border: "border-t-ocean-500",
    glow: "shadow-ocean-500/10",
    badge: "bg-ocean-500/15 text-ocean-300",
    accent: "from-ocean-500/10 to-transparent",
    buttonHover: "hover:border-ocean-400 hover:text-ocean-300",
    text: "text-ocean-400",
    hoverText: "group-hover:text-ocean-400",
  },
  {
    border: "border-t-violet-500",
    glow: "shadow-violet-500/10",
    badge: "bg-violet-500/15 text-violet-300",
    accent: "from-violet-500/10 to-transparent",
    buttonHover: "hover:border-violet-400 hover:text-violet-300",
    text: "text-violet-400",
    hoverText: "group-hover:text-violet-400",
  },
  {
    border: "border-t-emerald-500",
    glow: "shadow-emerald-500/10",
    badge: "bg-emerald-500/15 text-emerald-300",
    accent: "from-emerald-500/10 to-transparent",
    buttonHover: "hover:border-emerald-400 hover:text-emerald-300",
    text: "text-emerald-400",
    hoverText: "group-hover:text-emerald-400",
  },
  {
    border: "border-t-amber-500",
    glow: "shadow-amber-500/10",
    badge: "bg-amber-500/15 text-amber-300",
    accent: "from-amber-500/10 to-transparent",
    buttonHover: "hover:border-amber-400 hover:text-amber-300",
    text: "text-amber-400",
    hoverText: "group-hover:text-amber-400",
  },
  {
    border: "border-t-rose-500",
    glow: "shadow-rose-500/10",
    badge: "bg-rose-500/15 text-rose-300",
    accent: "from-rose-500/10 to-transparent",
    buttonHover: "hover:border-rose-400 hover:text-rose-300",
    text: "text-rose-400",
    hoverText: "group-hover:text-rose-400",
  },
  {
    border: "border-t-teal-500",
    glow: "shadow-teal-500/10",
    badge: "bg-teal-500/15 text-teal-300",
    accent: "from-teal-500/10 to-transparent",
    buttonHover: "hover:border-teal-400 hover:text-teal-300",
    text: "text-teal-400",
    hoverText: "group-hover:text-teal-400",
  },
  {
    border: "border-t-indigo-500",
    glow: "shadow-indigo-500/10",
    badge: "bg-indigo-500/15 text-indigo-300",
    accent: "from-indigo-500/10 to-transparent",
    buttonHover: "hover:border-indigo-400 hover:text-indigo-300",
    text: "text-indigo-400",
    hoverText: "group-hover:text-indigo-400",
  },
  {
    border: "border-t-coral-500",
    glow: "shadow-coral-500/10",
    badge: "bg-coral-500/15 text-coral-300",
    accent: "from-coral-500/10 to-transparent",
    buttonHover: "hover:border-coral-400 hover:text-coral-300",
    text: "text-coral-400",
    hoverText: "group-hover:text-coral-400",
  },
  {
    border: "border-t-fuchsia-500",
    glow: "shadow-fuchsia-500/10",
    badge: "bg-fuchsia-500/15 text-fuchsia-300",
    accent: "from-fuchsia-500/10 to-transparent",
    buttonHover: "hover:border-fuchsia-400 hover:text-fuchsia-300",
    text: "text-fuchsia-400",
    hoverText: "group-hover:text-fuchsia-400",
  },
  {
    border: "border-t-cyan-500",
    glow: "shadow-cyan-500/10",
    badge: "bg-cyan-500/15 text-cyan-300",
    accent: "from-cyan-500/10 to-transparent",
    buttonHover: "hover:border-cyan-400 hover:text-cyan-300",
    text: "text-cyan-400",
    hoverText: "group-hover:text-cyan-400",
  },
];

export default function SkillCard({ certificate, index = 0 }: SkillCardProps) {
  const { skill, description, link } = certificate;
  const style = cardStyles[index % cardStyles.length];

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-xl border border-slate-700/60 p-6 transition-all duration-500 hover:-translate-y-2",
        `shadow-lg ${style.glow}`,
        `hover:shadow-xl ${style.glow}`,
        "border-t-4",
        style.border
      )}
    >
      {/* Background gradient accent */}
      <div
        className={cn(
          "pointer-events-none absolute -inset-x-4 -inset-y-2 bg-gradient-to-b opacity-30 blur-2xl transition-opacity duration-500 group-hover:opacity-60",
          style.accent
        )}
      />

      {/* Skill label badge */}
      <div className="relative z-10 flex items-center justify-between">
        <span
          className={cn(
            "inline-block rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-widest",
            style.badge
          )}
        >
          {style.text.replace("text-", "").replace("-400", "")}
        </span>
      </div>

      {/* Skill name */}
      <h3
        className={cn(
          "relative z-10 mt-4 font-display text-xl font-semibold text-mist-50 transition-colors duration-300",
          style.hoverText
        )}
      >
        {skill}
      </h3>

      {/* Description */}
      <p className="relative z-10 mt-3 flex-1 text-sm leading-relaxed text-slate-400">
        {description}
      </p>

      {/* Divider */}
      <div className="relative z-10 my-5 h-px w-full bg-gradient-to-r from-transparent via-slate-600 to-transparent" />

      {/* Button */}
      <div className="relative z-10">
        <Button
          href={link}
          external
          variant="outline"
          className={cn("w-full transition-all duration-300", style.buttonHover)}
        >
          View Certificate
        </Button>
      </div>
    </article>
  );
}
