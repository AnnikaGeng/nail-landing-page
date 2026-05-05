export default function CtaSection() {
  return (
    <section
      id="kontakt"
      className="relative bg-ink text-white text-center px-8 py-28 overflow-hidden"
    >
      {/* radial glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] rounded-full bg-gold/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-xl mx-auto">
        <span className="text-xs font-medium uppercase tracking-[.14em] text-gold mb-4 block">
          Jetzt starten
        </span>
        <h2 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-bold leading-tight mb-4">
          Bereit für die Zukunft<br />
          der <em className="text-gold">Nagelkunst?</em>
        </h2>
        <p className="text-white/55 leading-relaxed mb-8">
          Vereinbaren Sie eine kostenlose Live-Demo und sehen Sie selbst, wie
          NailAI Ihr Geschäft transformiert.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="mailto:info@nailai.de"
            className="bg-gold text-ink font-semibold px-7 py-3 rounded-full hover:bg-gold-dark hover:-translate-y-0.5 hover:shadow-xl hover:shadow-gold/30 transition-all"
          >
            Demo anfragen
          </a>
          <a
            href="tel:+4900000000"
            className="border border-white/25 text-white px-7 py-3 rounded-full hover:border-gold hover:text-gold transition-colors"
          >
            Anrufen
          </a>
        </div>
      </div>
    </section>
  );
}
