"use client";

import { useEffect, useState } from "react";
import { ChevronUp, Menu, MoonStar, SunMedium, X } from "lucide-react";
import Image from "next/image";
import { navItems } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/theme-provider";

type PortfolioShellProps = {
  children: React.ReactNode;
};

export function PortfolioShell({ children }: PortfolioShellProps) {
  const [activeSection, setActiveSection] = useState("about");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => section !== null);

    let ticking = false;

    const updateActiveSection = () => {
      const marker = window.innerHeight * 0.34;
      const viewportBottom = window.innerHeight + window.scrollY;
      const pageBottom = document.documentElement.scrollHeight - 8;

      if (viewportBottom >= pageBottom) {
        setActiveSection(navItems.at(-1)?.id ?? "contact");
        ticking = false;
        return;
      }

      let nextActiveSection = sections[0]?.id ?? "about";

      for (const section of sections) {
        const { top, bottom } = section.getBoundingClientRect();
        if (top <= marker && bottom >= marker) {
          nextActiveSection = section.id;
          break;
        }

        if (top < marker) {
          nextActiveSection = section.id;
        }
      }

      setActiveSection(nextActiveSection);
      ticking = false;
    };

    const requestUpdate = () => {
      if (ticking) {
        return;
      }

      ticking = true;
      window.requestAnimationFrame(updateActiveSection);
    };

    requestUpdate();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 420);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative overflow-x-clip">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/50 bg-bg/70 backdrop-blur-md">
        <div className="container-shell flex h-20 items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-display text-lg font-semibold tracking-[-0.06em] text-text hover:text-accent transition-colors duration-300"
          >
            Joshua P.
          </button>
          <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={cn(
                  "group relative px-4 py-2 text-sm font-medium text-muted",
                  activeSection === item.id && "text-text"
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute inset-x-4 bottom-1 h-px origin-left scale-x-0 bg-accent duration-200 group-hover:scale-x-100",
                    activeSection === item.id && "scale-x-100"
                  )}
                />
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
                      </div>
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((open) => !open)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-surface/70 text-text"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity md:hidden",
          mobileOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={() => setMobileOpen(false)}
      />

      <aside
        className={cn(
          "fixed right-0 top-0 z-50 h-full w-[78vw] max-w-sm border-l border-border/60 bg-bg px-6 pb-8 pt-24 shadow-2xl transition-transform duration-300 md:hidden",
          mobileOpen ? "translate-x-0" : "translate-x-full"
        )}
        aria-label="Mobile navigation"
      >
        <nav className="flex flex-col gap-2">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "rounded-2xl border px-4 py-3 text-base font-medium",
                activeSection === item.id
                  ? "border-accent/70 bg-accent/10 text-text"
                  : "border-transparent bg-surface/50 text-muted"
              )}
            >
              {item.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download
            onClick={() => setMobileOpen(false)}
            className="mt-4 rounded-2xl bg-accent px-4 py-3 text-center text-base font-semibold text-slate-950 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg"
          >
            Download Resume
          </a>
        </nav>
      </aside>

      <main>{children}</main>
      <button
        type="button"
        aria-label="Back to top"
        onClick={scrollToTop}
        className={cn(
          "fixed bottom-6 right-6 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full border border-border/70 bg-surface/90 text-text shadow-amber transition-all duration-300 hover:border-accent/80 hover:text-accent",
          showScrollTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
        )}
      >
        <ChevronUp className="h-5 w-5" />
      </button>
    </div>
  );
}

function ThemeToggle({
  onToggle,
  theme
}: {
  onToggle: () => void;
  theme: "dark" | "light";
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-surface/70 text-text"
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {theme === "dark" ? <SunMedium className="h-5 w-5" /> : <MoonStar className="h-5 w-5" />}
    </button>
  );
}
