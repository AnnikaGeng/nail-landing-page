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
    <section className="bg-ink px-8 lg:px-16 py-24">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Visual */}
        <div className="flex justify-center order-last lg:order-first">
          <div className="w-80 h-80 rounded-full border border-gold/25 flex items-center justify-center relative">
            <div className="absolute inset-5 rounded-full border border-dashed border-gold/20" />
            <svg viewBox="0 0 220 380" className="h-72 w-auto" fill="none">
              <rect x="20" y="10" width="180" height="360" rx="20" fill="#252015" />
              <rect x="40" y="26" width="140" height="100" rx="10" fill="#2d2315" />
              <text x="110" y="82" textAnchor="middle" fontFamily="Georgia,serif" fontSize="13" fill="#C6A97D" fontStyle="italic">NailAI</text>
              <rect x="55" y="145" width="110" height="28" rx="14" fill="#C6A97D" />
              <text x="110" y="164" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fill="#1C1810" fontWeight="700" letterSpacing="1">DESIGN WÄHLEN</text>
              <circle cx="110" cy="278" r="66" fill="#0e0b07" />
              <circle cx="110" cy="278" r="66" stroke="#C6A97D" strokeWidth="2" fill="none" />
              <circle cx="110" cy="278" r="46" fill="#1a150d" />
              <circle cx="110" cy="278" r="18" fill="#C6A97D" opacity=".3" />
            </svg>
            {/* glow */}
            <div className="absolute inset-0 rounded-full bg-gold/5 blur-3xl" />
          </div>
        </div>

        {/* Text */}
        <div>
          <span className="text-xs font-medium uppercase tracking-[.14em] text-gold mb-3 block">
            Technologie
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl lg:text-4xl font-bold text-white leading-tight mb-3">
            KI, die <em className="text-gold">wirklich</em> versteht
          </h2>
          <p className="text-white/50 leading-relaxed mb-8 max-w-md">
            Hochpräzise Kameratechnologie kombiniert mit maschinellem Lernen -
            für konsistente Ergebnisse auf jedem Nageltyp.
          </p>

          <div className="flex flex-col gap-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="flex gap-4 items-start p-4 rounded-xl border border-gold/20 bg-white/[.03] hover:bg-gold/10 hover:border-gold/40 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-gold flex items-center justify-center text-lg flex-shrink-0">
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
