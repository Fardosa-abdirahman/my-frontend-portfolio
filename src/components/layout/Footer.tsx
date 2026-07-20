import { scrollToSection } from "../../data/navigation";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-ink via-indigo-950 to-violet-950 text-mist-50">
      <div className="color-bar opacity-80" />
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="brand-gradient-text font-display text-lg font-semibold">
            Fardosa
          </p>
          <p className="mt-1 text-sm text-mist-300/75">
            Aspiring Full-Stack Developer
          </p>
        </div>

        <div className="flex flex-wrap gap-4 text-sm">
          <button
            type="button"
            onClick={() => scrollToSection("projects")}
            className="text-emerald-200/90 transition hover:text-emerald-100"
          >
            Projects
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("skills")}
            className="text-amber-200/90 transition hover:text-amber-100"
          >
            Skills
          </button>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-violet-200/90 transition hover:text-violet-100"
          >
            GitHub
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-4 text-center text-xs text-mist-100/55">
        © {year} Fardosa. Built with React & Tailwind CSS.
      </div>
    </footer>
  );
}
