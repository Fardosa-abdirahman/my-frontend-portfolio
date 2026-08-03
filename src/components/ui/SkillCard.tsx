import type { Skill } from "../../data/skills";

interface SkillCardProps {
  skill: Skill;
}

export default function SkillCard({ skill }: SkillCardProps) {
  return (
    <article
      className="group flex flex-col items-center text-center"
      style={{ ["--skill-color" as string]: skill.color }}
    >
      <div
        className="relative flex h-20 w-20 items-center justify-center rounded-2xl border-2 transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-[1.04] sm:h-24 sm:w-24"
        style={{
          borderColor: "var(--skill-color)",
          backgroundColor: "color-mix(in srgb, var(--skill-color) 12%, transparent)",
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            boxShadow: "0 10px 28px color-mix(in srgb, var(--skill-color) 35%, transparent)",
            backgroundColor:
              "color-mix(in srgb, var(--skill-color) 18%, transparent)",
          }}
        />
        <img
          src={skill.logo}
          alt={`${skill.name} logo`}
          width={48}
          height={48}
          className="relative h-10 w-10 object-contain sm:h-12 sm:w-12"
          loading="lazy"
        />
      </div>

      <h3 className="mt-3 font-display text-sm font-bold text-white transition-colors duration-300 group-hover:text-[var(--skill-color)] sm:text-base">
        {skill.name}
      </h3>
    </article>
  );
}
