"use client";

import { useEffect, useMemo, useState } from "react";
import Container from "../ui/Container";

const menuItems = [
  { label: "Tentang", href: "#tentang" },
  { label: "Produk", href: "#produk" },
  { label: "Kenapa Kami", href: "#nilai" },
  { label: "Pesan", href: "#pesan" },
];

export default function Navbar() {
  const [activeHref, setActiveHref] = useState("#home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionIds = useMemo(
    () => ["home", ...menuItems.map((item) => item.href.slice(1))],
    [],
  );

  useEffect(() => {
    const onScroll = () => {
      const pageHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress =
        pageHeight > 0 ? (window.scrollY / pageHeight) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, nextProgress)));

      let nextActive = "#home";
      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (!section) continue;
        const rect = section.getBoundingClientRect();
        if (rect.top <= 140) {
          nextActive = `#${id}`;
        }
      }
      setActiveHref(nextActive);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [sectionIds]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--stroke)] bg-[color:var(--bg-overlay)] backdrop-blur">
      <div
        className="h-[2px] bg-[color:var(--accent-900)]/85 transition-[width] duration-200"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden
      />
      <Container className="flex h-16 items-center justify-between">
        <a href="#home" className="group inline-flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[color:var(--accent-900)] text-sm font-bold text-[color:var(--cream-100)] transition-transform duration-300 group-hover:rotate-6">
            HM
          </span>
          <span className="font-display text-xl font-semibold text-[color:var(--ink-900)]">
            Hitam Manis
          </span>
        </a>

        <nav className="hidden items-center gap-3 md:flex">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                activeHref === item.href
                  ? "bg-[color:var(--accent-900)] text-[color:var(--cream-100)]"
                  : "text-[color:var(--ink-700)] hover:bg-[color:var(--cream-100)] hover:text-[color:var(--accent-900)]"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#pesan"
            className="hidden rounded-full border border-[color:var(--accent-900)] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[color:var(--accent-900)] transition-all duration-300 hover:bg-[color:var(--accent-900)] hover:text-[color:var(--cream-100)] sm:inline-flex"
          >
            Coba Sekarang
          </a>

          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--stroke-strong)] text-[color:var(--ink-900)] transition-colors duration-300 hover:bg-[color:var(--cream-100)] md:hidden"
            aria-expanded={isMenuOpen}
            aria-label="Buka menu navigasi"
          >
            <span className="text-lg leading-none">
              {isMenuOpen ? "×" : "☰"}
            </span>
          </button>
        </div>
      </Container>

      <div
        className={`overflow-hidden border-t border-[color:var(--stroke)] transition-all duration-300 md:hidden ${
          isMenuOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <Container className="flex flex-col gap-2 py-3">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={`rounded-xl px-4 py-3 text-sm font-semibold transition-colors duration-300 ${
                activeHref === item.href
                  ? "bg-[color:var(--accent-900)] text-[color:var(--cream-100)]"
                  : "bg-[color:var(--cream-100)] text-[color:var(--ink-800)] hover:bg-[color:var(--cream-200)]"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#pesan"
            onClick={() => setIsMenuOpen(false)}
            className="mt-1 rounded-xl border border-[color:var(--accent-900)] px-4 py-3 text-center text-xs font-semibold uppercase tracking-wide text-[color:var(--accent-900)] transition-all duration-300 hover:bg-[color:var(--accent-900)] hover:text-[color:var(--cream-100)]"
          >
            Coba Sekarang
          </a>
        </Container>
      </div>
    </header>
  );
}
