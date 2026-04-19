"use client";

import { useEffect, useState } from "react";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > 520);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full border border-[color:var(--stroke-strong)] bg-[color:var(--cream-100)] text-xl text-[color:var(--ink-900)] shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[color:var(--accent-900)] hover:text-[color:var(--cream-100)] ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
      aria-label="Kembali ke atas"
    >
      ↑
    </button>
  );
}
