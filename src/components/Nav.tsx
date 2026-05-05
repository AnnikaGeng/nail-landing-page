"use client";

import { useState, useEffect } from "react";

const links = [
  { href: "#technologie", label: "Technologie" },
  { href: "#ablauf", label: "Ablauf" },
  { href: "#fuer-wen", label: "Für wen?" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 lg:px-16 py-4 transition-all duration-300 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-md border-b border-gold/20 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <span className="font-[family-name:var(--font-playfair)] text-xl font-bold text-ink tracking-wide">
        Nail<span className="text-gold-dark">AI</span>
      </span>

      <ul className="hidden md:flex gap-8 list-none">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="text-sm uppercase tracking-widest text-text hover:text-gold-dark transition-colors"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="#kontakt"
        className="bg-ink text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-gold-dark transition-colors"
      >
        Demo anfragen
      </a>
    </nav>
  );
}
