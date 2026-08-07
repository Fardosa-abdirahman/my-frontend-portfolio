import type { Skill } from "../../data/skills";

interface SkillCardProps {
  skill: Skill;
}

export default function SkillCard({ skill }: SkillCardProps) {
  return (
    <article
      className="group relative flex h-full flex-col items-center rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:border-white/25 sm:p-5"
      style={{ ["--skill-color" as string]: skill.color }}
    >
      {/* hover glow ring */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-all duration-300 group-hover:opacity-100"
        style={{
          boxShadow:
            "0 18px 45px color-mix(in srgb, var(--skill-color) 40%, transparent)",
          background:
            "radial-gradient(circle at 50% 0%, color-mix(in srgb, var(--skill-color) 22%, transparent), transparent 70%)",
        }}
      />

      {/* featured badge */}
      {skill.featured && (
        <span
          className="absolute -top-2 -right-2 z-10 rounded-full border px-2 py-0.5 font-display text-[10px] font-bold uppercase tracking-wider"
          style={{
            color: "var(--skill-color)",
            borderColor: "color-mix(in srgb, var(--skill-color) 55%, transparent)",
            backgroundColor:
              "color-mix(in srgb, var(--skill-color) 14%, #111111)",
            boxShadow:
              "0 4px 14px color-mix(in srgb, var(--skill-color) 35%, transparent)",
          }}
        >
          ★ Top
        </span>
      )}

      {/* icon */}
      <div
        className="relative flex h-16 w-16 items-center justify-center rounded-xl border transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110 sm:h-20 sm:w-20"
        style={{
          borderColor: "color-mix(in srgb, var(--skill-color) 45%, transparent)",
          backgroundColor:
            "color-mix(in srgb, var(--skill-color) 12%, transparent)",
        }}
      >
        <img
          src={skill.logo}
          alt={`${skill.name} logo`}
          width={44}
          height={44}
          className="relative h-9 w-9 object-contain drop-shadow sm:h-11 sm:w-11"
          loading="lazy"
        />
      </div>

      {/* name */}
      <h3 className="mt-3 font-display text-sm font-bold text-white transition-colors duration-300 group-hover:text-[var(--skill-color)] sm:text-base">
        {skill.name}
      </h3>
      <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted-light">
        {skill.description}
      </p>

      {/* level indicator */}
      <div className="mt-auto w-full pt-4">
        <div className="mb-1.5 flex items-center justify-between text-[11px] font-medium">
          <span className="uppercase tracking-wider text-muted-light">
            Proficiency
          </span>
          <span
            className="font-display font-bold"
            style={{ color: "var(--skill-color)" }}
          >
            {skill.level}%
          </span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full transition-all duration-700 ease-out group-hover:brightness-125"
            style={{
              width: `${skill.level}%`,
              backgroundImage: `linear-gradient(90deg, var(--skill-color), color-mix(in srgb, var(--skill-color) 60%, white))`,
              boxShadow: `0 0 10px color-mix(in srgb, var(--skill-color) 60%, transparent)`,
            }}
          />
        </div>
      </div>
    </article>
  );
}
