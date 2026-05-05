const audiences = [
  {
    emoji: "💅",
    title: "Nagelstudio",
    body: "Komplexe Handmalerei kostet im Salon 35-50 €. Mit NailAI liegt Ihr Materialeinsatz bei unter 1 €. Bieten Sie ein 9,90-€-Einstiegsangebot als Kundenmagnet - oder kombinieren Sie es mit Pflege-Services für ein High-Margin-Upgrade.",
    highlight: "↑ +30 % Einzelkunden-Umsatz",
  },
  {
    emoji: "✂️",
    title: "Friseur & Tanning",
    body: "Ihre Kundin wartet 30 Minuten auf die Tönung. In dieser Zeit liefert NailAI ein komplettes Nagelset - nahezu ohne Personalaufwand. 5 Kunden täglich: bis zu 1.500-2.000 € Mehreinnahmen pro Monat.",
    highlight: "15-20 € Zusatzeinnahme / Besuch",
  },
  {
    emoji: "🌸",
    title: "Beauty-SPA",
    body: "Überraschen Sie Ihre Kunden nach jeder Behandlung mit einem unerwarteten 'Fingertip-Erlebnis' - kostenlos oder als exklusiver Premium-Add-on. Einzigartiger Wow-Faktor, der Stammkunden schafft.",
    highlight: "Kostenpunkt unter 1 € pro Set",
  },
];

export default function AudienceSection() {
  return (
    <section id="fuer-wen" className="bg-white px-8 lg:px-16 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs font-medium uppercase tracking-[.14em] text-gold-dark mb-3 block">
            Für wen ist NailAI?
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl lg:text-4xl font-bold text-ink">
            Drei Branchen.{" "}
            <em className="text-gold-dark">Ein Gerät.</em>
          </h2>
          <p className="text-muted mt-3 max-w-md mx-auto leading-relaxed">
            Ob Nagelstudio, Friseursalon oder Beauty-SPA - NailAI schafft sofort neue Einnahmequellen.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {audiences.map((a) => (
            <div
              key={a.title}
              className="relative bg-cream rounded-2xl p-8 border border-gold/20 overflow-hidden hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-gold/15 transition-all duration-200"
            >
              {/* top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold to-gold-dark" />

              <span className="text-4xl mb-5 block">{a.emoji}</span>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-ink mb-3">
                {a.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">{a.body}</p>
              <div className="mt-5 inline-block bg-white text-gold-dark text-sm font-medium px-4 py-2 rounded-xl border border-gold/30">
                {a.highlight}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
