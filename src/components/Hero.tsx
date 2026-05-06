import Image from "next/image";

const stats = [
  { number: "30s", label: "Pro Finger" },
  { number: "2400", label: "DPI Auflösung" },
  { number: "<1€", label: "Beide Hände" },
];

export default function Hero() {
  return (
    <section className="h-screen max-h-[900px] min-h-[640px] grid lg:grid-cols-2 gap-8 items-center px-8 lg:px-16 pt-20 pb-8 relative overflow-hidden">
      {/* background glow */}
      <div className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-radial from-gold/15 to-transparent pointer-events-none" />

      {/* Left */}
      <div className="flex flex-col justify-center">
        <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold-dark text-xs font-medium uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 w-fit">
          <span>✦</span> KI-gestützte Nagelkunst
        </div>

        <h1 className="font-[family-name:var(--font-playfair)] text-3xl lg:text-4xl xl:text-5xl font-bold text-ink leading-[1.12] mb-4">
          Vollautomatische Nagelkunst &ndash;{" "}
          <em className="text-gold-dark not-italic">Unter 1 € Kosten,</em>{" "}
          bis zu 20 € Einnahmen
        </h1>

        <p className="text-muted text-base leading-relaxed max-w-md mb-5">
          Professionelle Nageldesigns vollautomatisch - für unter{" "}
          <strong className="text-text font-medium">0,10 € pro Finger</strong>.
          Die komplette Hand kostet weniger als{" "}
          <strong className="text-text font-medium">1 Euro</strong>.
          Kein Aufwand. Nur perfekte Ergebnisse.
        </p>

        <div className="flex flex-wrap items-center gap-4 mb-6">
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 bg-ink text-white px-6 py-2.5 rounded-full font-medium text-sm hover:bg-gold-dark transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gold/25"
          >
            Demo anfragen →
          </a>
          <a
            href="#ablauf"
            className="inline-flex items-center gap-2 text-text text-sm font-medium hover:text-gold-dark transition-colors"
          >
            ▶ Wie es funktioniert
          </a>
        </div>

        <div className="flex gap-8 pt-5 border-t border-gold/25">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col gap-0.5">
              <span className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-ink">
                {s.number}
              </span>
              <span className="text-xs text-muted tracking-wide">{s.label}</span>
            </div>
          ))}
        </div>

      </div>

      {/* Right */}
      <div className="flex justify-center items-center relative h-full">
        <div className="relative flex items-center justify-center">
          {/* soft radial backdrop */}
          <div className="absolute w-[340px] h-[340px] lg:w-[400px] lg:h-[400px] rounded-full bg-gradient-to-br from-gold/15 to-cream2 blur-2xl" />

          {/* machine photo – both views, multiply blends white bg */}
          <div
            className="animate-float z-10"
            style={{ mixBlendMode: "multiply" }}
          >
            <Image
              src="/machine.PNG"
              alt="NailAI Nageldruckmaschine"
              width={700}
              height={520}
              className="w-[480px] lg:w-[560px] xl:w-[620px] h-auto"
              priority
            />
          </div>

          {/* floating tags */}
          <div className="absolute top-[10%] -left-4 lg:-left-8 z-20 bg-white rounded-2xl px-3 py-2.5 shadow-lg text-xs font-medium text-ink flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0" /> KI-Erkennung aktiv
          </div>
          <div className="absolute bottom-[18%] -right-4 lg:-right-8 z-20 bg-white rounded-2xl px-3 py-2.5 shadow-lg text-xs font-medium text-ink flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0" /> 2.400 DPI · Eco-Tinte
          </div>

          {/* dimension annotation */}
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
            {/* weight */}
            <div className="bg-ink/80 backdrop-blur-sm text-white rounded-xl px-3 py-2 flex flex-col items-center gap-0.5">
              <span className="text-gold text-[10px] font-medium uppercase tracking-widest">Gewicht</span>
              <span className="font-[family-name:var(--font-playfair)] text-sm font-semibold">9.75 kg</span>
            </div>

            {/* divider dot */}
            <span className="w-1 h-1 rounded-full bg-gold/40" />

            {/* dimensions */}
            <div className="bg-ink/80 backdrop-blur-sm text-white rounded-xl px-3 py-2 flex flex-col items-center gap-0.5">
              <span className="text-gold text-[10px] font-medium uppercase tracking-widest">Abmessungen</span>
              <span className="font-[family-name:var(--font-playfair)] text-sm font-semibold tracking-wide">
                310 × 195 × 560 mm
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
