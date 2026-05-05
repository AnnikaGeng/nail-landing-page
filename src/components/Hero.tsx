import MachineSvg from "./MachineSvg";

const stats = [
  { number: "30s", label: "Pro Finger" },
  { number: "2400", label: "DPI Auflösung" },
  { number: "<1€", label: "Beide Hände" },
];

export default function Hero() {
  return (
    <section className="min-h-screen grid lg:grid-cols-2 gap-12 items-center px-8 lg:px-16 pt-28 pb-16 relative overflow-hidden">
      {/* background glow */}
      <div className="absolute top-[-20%] right-[-10%] w-[70vw] h-[70vw] rounded-full bg-gradient-radial from-gold/15 to-transparent pointer-events-none" />

      {/* Left */}
      <div>
        <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold-dark text-xs font-medium uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
          <span>✦</span> KI-gestützte Nagelkunst
        </div>

        <h1 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl xl:text-6xl font-bold text-ink leading-[1.1] mb-6">
          Salon-Nägel in{" "}
          <em className="text-gold-dark not-italic">30 Sekunden</em> –{" "}
          Ihr persönlicher Nagelkünstler
        </h1>

        <p className="text-muted text-lg leading-relaxed max-w-lg mb-8">
          Professionelle Nageldesigns vollautomatisch – für unter{" "}
          <strong className="text-text font-medium">0,10 € pro Finger</strong>.
          Die komplette Hand kostet weniger als{" "}
          <strong className="text-text font-medium">1 Euro</strong>. Kein
          Aufwand. Nur perfekte Ergebnisse.
        </p>

        <div className="flex flex-wrap items-center gap-4 mb-10">
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 bg-ink text-white px-6 py-3 rounded-full font-medium hover:bg-gold-dark transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gold/25"
          >
            Demo anfragen →
          </a>
          <a
            href="#ablauf"
            className="inline-flex items-center gap-2 text-text font-medium hover:text-gold-dark transition-colors"
          >
            ▶ Wie es funktioniert
          </a>
        </div>

        <div className="flex gap-10 pt-6 border-t border-gold/25">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col gap-1">
              <span className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-ink">
                {s.number}
              </span>
              <span className="text-xs text-muted tracking-wide">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right */}
      <div className="flex justify-center items-center relative">
        <div className="relative">
          {/* circle backdrop */}
          <div className="w-[360px] h-[360px] lg:w-[420px] lg:h-[420px] rounded-full bg-gradient-to-br from-gold/20 to-cream2 flex items-center justify-center">
            <div className="animate-float">
              <MachineSvg className="h-[320px] lg:h-[370px] w-auto drop-shadow-2xl" />
            </div>
          </div>
          {/* floating tags */}
          <div className="absolute top-[8%] -left-4 bg-white rounded-2xl px-4 py-3 shadow-lg text-sm font-medium text-ink flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gold" /> KI-Erkennung aktiv
          </div>
          <div className="absolute bottom-[16%] -right-4 bg-white rounded-2xl px-4 py-3 shadow-lg text-sm font-medium text-ink flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gold" /> 2.400 DPI · Eco-Tinte
          </div>
        </div>
      </div>
    </section>
  );
}
