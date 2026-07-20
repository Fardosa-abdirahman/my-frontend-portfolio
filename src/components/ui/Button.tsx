import type { MouseEvent } from "react";
import type { ButtonProps } from "../../types";
import { scrollToSection } from "../../data/navigation";
import { cn } from "../../utils/cn";

const variants = {
  primary:
    "bg-gradient-to-r text-white shadow-md hover:shadow-lg hover:-translate-y-0.5",
  secondary:
    "bg-gradient-to-r from-slate-ink via-indigo-700 to-violet-700 text-white shadow-md shadow-slate-ink/15 hover:shadow-lg hover:-translate-y-0.5",
  outline:
    "border border-slate-600 bg-slate-800/40 text-mist-200 shadow-sm hover:bg-slate-700/60 hover:-translate-y-0.5",
};

const defaultPrimaryGradient =
  "from-ocean-600 via-teal-500 to-violet-500 shadow-ocean-700/20 hover:from-ocean-700 hover:via-teal-600 hover:to-violet-600 hover:shadow-ocean-700/25";

export default function Button({
  children,
  href,
  variant = "primary",
  external = false,
  className = "",
  accentGradient,
  onClick,
  type = "button",
}: ButtonProps) {
  const primaryGradient = accentGradient ?? defaultPrimaryGradient;

  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300 ease-out",
    variant === "primary" && `${variants.primary} ${primaryGradient}`,
    variant === "secondary" && variants.secondary,
    variant === "outline" && variants.outline,
    className
  );

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    if (href?.startsWith("#")) {
      event.preventDefault();
      scrollToSection(href);
    }
    onClick?.();
  };

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        onClick={handleClick}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
