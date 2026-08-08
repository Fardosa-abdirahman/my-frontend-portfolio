import { useState } from "react";
import type { SectionId } from "../../data/navigation";
import {
  navLinks,
  navLinksLeft,
  navLinksRight,
  scrollToSection,
  sectionIds,
} from "../../data/navigation";
import { useActiveSection } from "../../hooks/useActiveSection";
import { cn } from "../../utils/cn";

function NavItem({
  name,
  href,
  isActive,
  onClick,
}: {
  name: string;
  href: string;
  isActive: boolean;
  onClick: () => void;
}) {
  const isExternal = href.endsWith(".pdf") || href.startsWith("http");

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
          "text-white/75 hover:text-white"
        )}
      >
        {name}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
isActive
          ? "bg-gradient-to-r from-accent to-accent-blue text-white shadow-md shadow-accent/30"
          : "text-white/75 hover:text-white"
      )}
    >
      {name}
    </button>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const activeSection = useActiveSection(sectionIds);

  const handleNavClick = (href: string) => {
    if (href.endsWith(".pdf") || href.startsWith("http")) return;
    scrollToSection(href);
    setOpen(false);
  };

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-5 md:px-6">
      <nav className="pointer-events-auto nav-pill mx-auto flex max-w-5xl items-center justify-between gap-2 rounded-full px-3 py-2.5 md:px-4">
        {/* Left links */}
        <div className="hidden flex-1 items-center justify-start gap-0.5 md:flex">
          {navLinksLeft.map((link) => {
            const id = link.href.replace("#", "") as SectionId;
            return (
              <NavItem
                key={link.href}
                name={link.name}
                href={link.href}
                isActive={activeSection === id}
                onClick={() => handleNavClick(link.href)}
              />
            );
          })}
        </div>

        {/* Brand */}
        <button
          type="button"
          onClick={() => handleNavClick("#home")}
          className="flex shrink-0 items-center gap-2 px-2"
          aria-label="Go to home"
        >
<span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-blue text-sm font-bold text-white">
            F
          </span>
          <span className="font-display text-base font-bold tracking-wide text-white">
            FARDOSA
          </span>
        </button>

        {/* Right links */}
        <div className="hidden flex-1 items-center justify-end gap-0.5 md:flex">
          {navLinksRight.map((link) => {
            const id = link.href.replace("#", "") as SectionId;
            const isHash = link.href.startsWith("#");
            return (
              <NavItem
                key={link.href}
                name={link.name}
                href={link.href}
                isActive={isHash && activeSection === id}
                onClick={() => handleNavClick(link.href)}
              />
            );
          })}
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
          className="rounded-full border border-white/15 px-3 py-1.5 text-sm text-white md:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {open && (
        <div className="pointer-events-auto mx-auto mt-2 max-w-5xl rounded-3xl bg-ink/95 px-4 py-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "") as SectionId;
              const isExternal =
                link.href.endsWith(".pdf") || link.href.startsWith("http");
              const isActive =
                link.href.startsWith("#") && activeSection === id;

              if (isExternal) {
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full px-4 py-2.5 text-left text-sm font-medium text-white/80"
                    onClick={() => setOpen(false)}
                  >
                    {link.name}
                  </a>
                );
              }

              return (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => handleNavClick(link.href)}
                  className={cn(
                    "rounded-full px-4 py-2.5 text-left text-sm font-medium transition-colors",
isActive
                      ? "bg-gradient-to-r from-accent to-accent-blue text-white"
                      : "text-white/80"
                  )}
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
