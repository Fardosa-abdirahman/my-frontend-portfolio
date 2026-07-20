import type { Project } from "../../types";
import { getCardAccent } from "../../lib/sectionThemes";
import { cn } from "../../utils/cn";
import Button from "./Button";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const { name, description, stack, image, liveUrl, githubUrl } = project;
  const accent = getCardAccent(index);

  return (
    <article
      className={cn(
        "group surface-card h-full overflow-hidden rounded-xl border-t-4 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl",
        accent.border,
        accent.hover
      )}
    >
      <div className="aspect-[16/10] overflow-hidden bg-slate-800">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="space-y-4 p-6">
        <div>
          <h3
            className={cn(
              "font-display text-xl font-semibold text-mist-50 transition-colors duration-300",
              accent.titleHover
            )}
          >
            {name}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">
            {description}
          </p>
        </div>
        <p className={cn("text-xs font-medium tracking-wide", accent.text)}>
          {stack.join(" · ")}
        </p>
        <div className="flex flex-wrap gap-3">
          {liveUrl && (
            <Button
              href={liveUrl}
              variant="primary"
              accentGradient="from-emerald-600 via-teal-500 to-cyan-500 shadow-emerald-700/20 hover:from-emerald-700 hover:via-teal-600 hover:to-cyan-600"
              className="px-4 py-2"
            >
              Live Demo
            </Button>
          )}
          {githubUrl && (
            <Button
              href={githubUrl}
              external
              variant="outline"
              className="px-4 py-2 hover:border-violet-400 hover:text-violet-300"
            >
              GitHub
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}
