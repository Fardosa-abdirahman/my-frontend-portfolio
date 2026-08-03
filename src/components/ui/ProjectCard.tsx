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
        "hover:-translate-y-1.5 hover:shadow-xl"
      )}
    >
      <div className="aspect-[16/10] overflow-hidden bg-paper-soft">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="space-y-4 p-6">
        <div>
          <h3 className="font-display text-xl font-bold text-ink transition-colors duration-300 group-hover:text-accent">
            {name}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {description}
          </p>
        </div>
        <p className="text-xs font-semibold tracking-wide text-accent">
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
              className="px-5 py-2.5"
            >
              GitHub
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}
