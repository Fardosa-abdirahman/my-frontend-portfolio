import { useState } from "react";
import type { SectionId } from "../../data/navigation";
import { navLinks, scrollToSection, sectionIds } from "../../data/navigation";
import { useActiveSection } from "../../hooks/useActiveSection";
import { sectionThemes } from "../../lib/sectionThemes";
import { cn } from "../../utils/cn";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const activeSection = useActiveSection(sectionIds);

  const handleNavClick = (href: string) => {
    scrollToSection(href);
    setOpen(false);
  };

  const getLinkStyles = (id: SectionId, isActive: boolean) => {
    const theme = sectionThemes[id];
    return cn(
      "rounded-lg px-3 py-2 text-sm font-medium transition-all duration-300",
      isActive
        ? theme.navActive
        : cn("text-slate-400 hover:bg-slate-800/60", theme.navHover)
    );
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-700/80 bg-slate-950/90 backdrop-blur-lg">
      <div className="color-bar" />
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <button
          type="button"
          onClick={() => handleNavClick("#home")}
          className="bg-gradient-to-r from-ocean-400 via-violet-400 to-rose-400 bg-clip-text font-display text-xl font-semibold tracking-tight text-transparent transition-opacity hover:opacity-80"
        >
          Fardosa
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "") as SectionId;
            const isActive = activeSection === id;

            return (
              <button
                key={link.href}
                type="button"
                onClick={() => handleNavClick(link.href)}
                className={getLinkStyles(id, isActive)}
              >
                {link.name}
              </button>
            );
          })}
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
          className="rounded-lg border border-slate-600 bg-slate-800/80 px-3 py-2 text-sm text-mist-100 transition hover:border-violet-400 hover:text-violet-300 md:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-700/80 bg-slate-950/95 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "") as SectionId;
              const isActive = activeSection === id;

              return (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => handleNavClick(link.href)}
                  className={cn(getLinkStyles(id, isActive), "text-left")}
                >
                  {link.name}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
