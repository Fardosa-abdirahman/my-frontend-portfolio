import {
  ScrollReveal,
  ScrollStagger,
  SectionHeader,
  ThemedSection,
} from "../components/sections/SectionBlock";

const aboutBoxes = [
  {
    label: "Journey",
    color: "#A78BFA",
    color2: "#6366F1",
    icon: "🚀",
    text: "I started with HTML and CSS, then moved into JavaScript and React to build interactive, user-focused experiences.",
  },
  {
    label: "Stack",
    color: "#60A5FA",
    color2: "#3B82F6",
    icon: "🧩",
    text: "Along the way I learned TypeScript, Tailwind CSS, and foundational backend tools like Node.js, MySQL, and MongoDB.",
  },
  {
    label: "Education",
    color: "#22D3EE",
    color2: "#0EA5E9",
    icon: "🎓",
    text: "Studied Software Engineering at Frastract Academy, gaining hands-on experience through real projects.",
  },
  {
    label: "Approach",
    color: "#C084FC",
    color2: "#A855F7",
    icon: "🎯",
    text: "I believe consistency matters more than perfection. Every project is a chance to grow as a developer.",
  },
  {
    label: "Mindset",
    color: "#818CF8",
    color2: "#6366F1",
    icon: "💡",
    text: "I keep practicing, shipping small projects, and improving my craft one iteration at a time.",
  },
];

export default function AboutSection() {
  return (
    <ThemedSection
      id="about"
      className="!min-h-0 justify-start py-16 md:py-20"
    >
      <SectionHeader
        sectionId="about"
        label="About"
        title="Building with curiosity and care"
        description="A bit about my path, tools, and how I like to work."
        align="split"
      />

      {/* Intro card */}
      <ScrollReveal>
        <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm md:p-8">
          <p className="text-base leading-relaxed text-muted md:text-lg">
            I&apos;m a full-stack developer who loves turning ideas into clean,
            performant web applications. I focus on user experience, clean
            code, and continuous learning — from polished frontends built with
            <span className="font-semibold text-white"> React &amp; TypeScript</span>{" "}
            to reliable backend logic.
          </p>
        </div>
      </ScrollReveal>

      {/* Highlighted Luulsolution experience card */}
      <ScrollReveal className="mt-6">
        <div className="group relative overflow-hidden rounded-3xl border border-accent/30 bg-gradient-to-br from-accent/15 via-accent-blue/10 to-accent-cyan/10 p-6 transition-all duration-300 hover:border-accent/50 md:p-8">
          <div
            aria-hidden
            className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/20 blur-3xl"
          />
          <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-accent-blue font-display text-xl font-bold text-white shadow-lg shadow-accent/30">
              L
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-glow">
                Experience
              </span>
              <h3 className="mt-1 font-display text-2xl font-bold text-white">
                Luulsolution
              </h3>
            </div>
          </div>
          <p className="relative mt-4 text-base leading-relaxed text-white/70 md:text-lg">
            I worked with{" "}
            <span className="font-semibold text-white">Luulsolution</span>,
            collaborating in a cross-functional team, translating requirements
            into practical features, and shipping real-world solutions. This
            experience sharpened my ability to work with others, communicate
            clearly, and deliver reliable software on time.
          </p>
          <div className="relative mt-5 flex flex-wrap gap-2">
            {["Team Collaboration", "Requirements → Features", "Shipped Solutions"].map(
              (tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-medium text-white/80"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </ScrollReveal>

{/* About boxes */}
      <ScrollStagger className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {aboutBoxes.map((box) => (
          <ScrollReveal key={box.label}>
            <article
              className="group relative flex h-full min-h-[200px] flex-col overflow-hidden rounded-2xl border-2 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl sm:min-h-[220px]"
              style={{
                ["--box-color" as string]: box.color,
                ["--box-color2" as string]: box.color2,
                borderColor:
                  "color-mix(in srgb, var(--box-color) 45%, transparent)",
                background:
                  "linear-gradient(150deg, color-mix(in srgb, var(--box-color) 16%, #13131f), color-mix(in srgb, var(--box-color2) 10%, #13131f))",
              }}
            >
              {/* hover glow */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle at 50% 0%, color-mix(in srgb, var(--box-color) 30%, transparent), transparent 70%)",
                }}
              />

              {/* icon badge */}
              <div
                className="relative mb-5 flex h-12 w-12 items-center justify-center rounded-xl text-xl transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: `linear-gradient(135deg, var(--box-color), var(--box-color2))`,
                  boxShadow: `0 8px 24px color-mix(in srgb, var(--box-color) 45%, transparent)`,
                }}
              >
                <span className="drop-shadow">{box.icon}</span>
              </div>

              <h3
                className="relative font-display text-lg font-bold text-white transition-colors duration-300"
                style={{ color: "var(--box-color)" }}
              >
                {box.label}
              </h3>

              <p className="relative mt-3 flex-1 text-sm leading-relaxed text-white/80 sm:text-[15px]">
                {box.text}
              </p>
            </article>
          </ScrollReveal>
        ))}
      </ScrollStagger>
    </ThemedSection>
  );
}
