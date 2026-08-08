import type { Project } from "../../types";
import { cn } from "../../utils/cn";
import Button from "./Button";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { name, description, stack, image, liveUrl, githubUrl } = project;

  return (
    <article
      className={cn(
        "group glass-card-light h-full overflow-hidden rounded-[28px] transition-all duration-300",
        "hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/10"
      )}
    >
      <div className="aspect-[16/10] overflow-hidden bg-ink-soft">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="space-y-4 p-6">
        <div>
          <h3 className="font-display text-xl font-bold text-white transition-colors duration-300 group-hover:text-accent-glow">
            {name}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {description}
          </p>
        </div>
        <p className="text-xs font-semibold tracking-wide text-gradient">
          {stack.join(" · ")}
        </p>
        <div className="flex flex-wrap gap-3">
          {liveUrl && (
            <Button href={liveUrl} variant="primary" className="px-5 py-2.5">
              Live Demo
            </Button>
          )}
          {githubUrl && (
            <Button
              href={githubUrl}
              external
              variant="outline"
              className="border-white/20 bg-white/[0.03] text-white hover:border-accent hover:text-accent-glow px-5 py-2.5"
            >
              GitHub
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}
