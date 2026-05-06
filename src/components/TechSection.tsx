import Image from "next/image";

const features = [
  {
    icon: "📸",
    title: "Echtzeit-3D-Nagelanalyse",
    desc: "Kamera erfasst Nagelkrümmung, -breite und -position automatisch - kein manuelles Ausrichten.",
  },
  {
    icon: "🗂️",
    title: "Riesige Designbibliothek",
    desc: "Tausende Motive, Cloud-Updates, eigene Fotos (Haustiere, Portraits) und KI-generierte Exklusivdesigns.",
  },
  {
    icon: "💧",
    title: "Zertifizierte Eco-Tinte",
    desc: "Wasserlöslich, geruchslos, mit Alkohol entfernbar - sicher für alle Hauttypen.",
  },
  {
    icon: "🔄",
    title: "Wartungsarm & zuverlässig",
    desc: "Industriell entwickelter Druckkopf mit langer Lebensdauer und einfacher Reinigung.",
  },
];

export default function TechSection() {
  return (
    <section id="technologie" className="bg-ink py-16 overflow-hidden">
      <div className="grid lg:grid-cols-2 items-stretch">
        {/* Visual: matches right column height */}
        <div className="order-last lg:order-first pl-8 lg:pl-16 relative min-h-[400px]">
          <Image
            src="/gallery.png"
            alt="NailAI Designbibliothek"
            fill
            className="object-cover object-center rounded-2xl"
            unoptimized
          />
        </div>

        {/* Text: padded right column */}
        <div className="px-8 lg:pl-10 lg:pr-10 py-8 lg:py-0">
          <span className="text-xs font-medium uppercase tracking-[.14em] text-gold mb-3 block">
            Technologie
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl lg:text-4xl font-bold text-white leading-tight mb-3">
            KI, die <em className="text-gold">wirklich</em> versteht
          </h2>
          <p className="text-white/50 leading-relaxed mb-5 max-w-md">
            Hochpräzise Kameratechnologie kombiniert mit maschinellem Lernen -
            für konsistente Ergebnisse auf jedem Nageltyp.
          </p>

          <div className="flex flex-col gap-2">
            {features.map((f) => (
              <div
                key={f.title}
                className="flex gap-3 items-start p-3 rounded-xl border border-gold/20 bg-white/[.03] hover:bg-gold/10 hover:border-gold/40 transition-all duration-200"
              >
                <div className="w-8 h-8 rounded-lg bg-gold flex items-center justify-center text-sm flex-shrink-0">
                  {f.icon}
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm mb-0.5">{f.title}</h4>
                  <p className="text-white/45 text-xs leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
