"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "./Lightbox";

const points = [
  {
    label: "KI-Erkennung",
    desc: "Automatische 3D-Nagelanalyse – perfekte Platzierung, kein manuelles Ausrichten.",
  },
  {
    label: "2400 DPI Druckqualität",
    desc: "Schärfer als jede Handmalerei – bei unter 0,10 € Materialkosten pro Finger.",
  },
  {
    label: "30 Sekunden pro Finger",
    desc: "Beide Hände in Minuten. Kein Fachpersonal nötig. Sofort einsatzbereit.",
  },
  {
    label: "Eco-Tinte, nagelschonend",
    desc: "Wasserlöslich, geruchslos, mit Alkohol entfernbar – sicher für alle Hauttypen.",
  },
];

const nailPhoto = { src: "/nails/nail1.jpg", alt: "KI-Nageldruck Beispiel: Landschaftsdesign" };

export default function WhySection() {
  const [open, setOpen] = useState(false);

  return (
    <section id="vorteile" className="bg-white px-8 lg:px-16 py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[2fr_3fr] gap-12 lg:gap-16 items-center">

        {/* ── Left ── */}
        <div>
          <span className="text-xs font-medium uppercase tracking-[.14em] text-gold-dark mb-3 block">
            Warum NailPrinter?
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl lg:text-[2.4rem] font-bold text-ink leading-[1.15] mb-6">
            Vollautomatisch.<br />
            <em className="text-gold-dark">Professionell. Rentabel.</em>
          </h2>

          <ul className="space-y-4">
            {points.map((p, i) => (
              <li key={i} className="flex gap-3 items-start">
                <div className="w-6 h-6 rounded-full bg-gold/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-dark" />
                </div>
                <div>
                  <span className="font-[family-name:var(--font-playfair)] font-semibold text-ink text-[.9rem]">
                    {p.label}
                  </span>
                  <p className="text-muted text-sm leading-relaxed mt-0.5">{p.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Right: nail photo ── */}
        <div className="cursor-zoom-in group" onClick={() => setOpen(true)}>
          <Image
            src={nailPhoto.src}
            alt={nailPhoto.alt}
            width={1200}
            height={675}
            className="w-full h-auto transition-opacity duration-200 group-hover:opacity-90"
            style={{ mixBlendMode: "multiply" }}
          />
        </div>

      {open && <Lightbox src={nailPhoto.src} alt={nailPhoto.alt} onClose={() => setOpen(false)} />}

      </div>
    </section>
  );
}
