import { scrollToSection } from "../../data/navigation";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
<footer className="section-dark-soft text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-blue text-sm font-bold">
            F
          </span>
          <div>
            <p className="font-display text-lg font-bold tracking-wide">
              FARDOSA
            </p>
            <p className="text-sm text-white/55">
              Aspiring Full-Stack Developer
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-5 text-sm">
          <button
            type="button"
            onClick={() => scrollToSection("projects")}
            className="text-white/65 transition hover:text-accent"
          >
            Projects
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("skills")}
            className="text-white/65 transition hover:text-accent"
          >
            Skills
          </button>
          <a
            href="https://github.com/Fardosa-abdirahman"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/65 transition hover:text-accent"
          >
            GitHub
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-4 text-center text-xs text-white/40">
        © {year} Fardosa. Built with React & Tailwind CSS.
      </div>
    </footer>
  );
}
