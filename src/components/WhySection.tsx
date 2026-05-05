import NailPhoto from "./NailPhoto";

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

// Drop your nail art photos into /public/nails/
const nailPhotos = [
  { src: "/nails/nail1.PNG", alt: "KI-Nageldruck Beispiel: Landschaftsdesign", rotate: "-rotate-3" },
  { src: "/nails/nail2.jpg", alt: "KI-Nageldruck Beispiel: Abstraktes Design", rotate: "rotate-2" },
  { src: "/nails/nail3.jpg", alt: "KI-Nageldruck Beispiel: Blumendesign", rotate: "-rotate-1" },
];

export default function WhySection() {
  return (
    <section id="technologie" className="bg-white px-8 lg:px-16 py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* ── Left ── */}
        <div>
          <span className="text-xs font-medium uppercase tracking-[.14em] text-gold-dark mb-4 block">
            Warum NailAI?
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl lg:text-[2.6rem] font-bold text-ink leading-[1.15] mb-5">
            Vollautomatisch.<br />
            <em className="text-gold-dark">Professionell. Rentabel.</em>
          </h2>
          <p className="text-muted text-base leading-relaxed mb-10 max-w-md">
            Unser KI-System erkennt Nagelform und Krümmung in Echtzeit –
            und liefert Ergebnisse, die Handmalerei übertreffen.
            Für Ihren Salon: mehr Umsatz, weniger Aufwand.
          </p>

          <ul className="space-y-6">
            {points.map((p, i) => (
              <li key={i} className="flex gap-4 items-start">
                <div className="w-7 h-7 rounded-full bg-gold/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-gold-dark" />
                </div>
                <div>
                  <span className="font-[family-name:var(--font-playfair)] font-semibold text-ink text-[.95rem]">
                    {p.label}
                  </span>
                  <p className="text-muted text-sm leading-relaxed mt-0.5">{p.desc}</p>
                </div>
              </li>
            ))}
          </ul>

          {/* ROI callout */}
          <div className="mt-10 bg-ink text-white rounded-2xl px-6 py-5 flex items-center gap-4">
            <span className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-gold leading-none">
              40×
            </span>
            <p className="text-sm leading-relaxed text-white/80">
              Handmalerei kostet im Salon bis zu 40 €.<br />
              <span className="text-white font-medium">Mit NailAI: unter 1 € Materialkosten.</span>
            </p>
          </div>
        </div>

        {/* ── Right: nail photo collage ── */}
        <div className="relative flex items-center gap-3 h-[480px]">

          {/* Photo 1 – tall left card */}
          <div className="relative flex-shrink-0 w-[48%] h-full rounded-3xl overflow-hidden shadow-2xl shadow-ink/20 border-4 border-white"
               style={{ transform: "rotate(-2deg)" }}>
            <NailPhoto src={nailPhotos[0].src} alt={nailPhotos[0].alt} index={0} className="w-full h-full" />
          </div>

          {/* Right column: two stacked cards */}
          <div className="flex flex-col gap-3 flex-1 h-full">
            <div className="relative flex-1 rounded-3xl overflow-hidden shadow-xl shadow-ink/15 border-4 border-white"
                 style={{ transform: "rotate(2deg)" }}>
              <NailPhoto src={nailPhotos[1].src} alt={nailPhotos[1].alt} index={1} className="w-full h-full" />
            </div>
            <div className="relative flex-1 rounded-3xl overflow-hidden shadow-xl shadow-ink/15 border-4 border-white"
                 style={{ transform: "rotate(-1deg)" }}>
              <NailPhoto src={nailPhotos[2].src} alt={nailPhotos[2].alt} index={2} className="w-full h-full" />
            </div>
          </div>

          {/* floating badge */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-40 bg-white rounded-2xl px-4 py-2.5 shadow-lg flex items-center gap-2 text-sm font-medium text-ink whitespace-nowrap">
            <span className="text-base">🎨</span> Echte Ergebnisse
          </div>
        </div>

      </div>
    </section>
  );
}
