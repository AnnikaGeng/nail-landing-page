import Image from "next/image";

const audiences = [
  {
    emoji: "💅",
    title: "Nagelstudio",
    body: "Komplexe Handmalerei kostet im Salon 35-50 €. Mit NailAI liegt Ihr Materialeinsatz bei unter 1 €. Bieten Sie ein 9,90-€-Einstiegsangebot als Kundenmagnet.",
    highlight: "↑ +30 % Umsatz pro Kunde",
    defaultOpen: true,
  },
  {
    emoji: "✂️",
    title: "Friseur & Tanning",
    body: "Während die Kundin auf die Tönung wartet, liefert NailAI ein komplettes Nagelset – nahezu ohne Personalaufwand. 5 Kunden täglich: bis zu 2.000 € Mehreinnahmen.",
    highlight: "15-20 € Zusatzeinnahme / Besuch",
  },
  {
    emoji: "🌸",
    title: "Beauty-SPA",
    body: "Der perfekte Premium-Add-on nach jeder Behandlung – kostenlos oder als exklusives Upgrade. Einzigartiger Wow-Faktor, der Stammkunden schafft.",
    highlight: "Unter 1 € Materialkosten",
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

        <div className="grid lg:grid-cols-[2fr_3fr] gap-8 items-center">
          {/* Left: stacked cards */}
          <div className="flex flex-col gap-3">
            {audiences.map((a) => (
              <div
                key={a.title}
                className="group relative bg-cream rounded-2xl px-6 py-5 border border-gold/20 overflow-hidden hover:shadow-xl hover:shadow-gold/15 transition-all duration-300 cursor-default"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold to-gold-dark" />
                <div className="flex gap-4 items-center">
                  <span className="text-2xl flex-shrink-0">{a.emoji}</span>
                  <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-ink">
                    {a.title}
                  </h3>
                </div>
                {/* expandable content */}
                <div className={`grid transition-all duration-300 ${a.defaultOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"} group-hover:grid-rows-[1fr]`}>
                  <div className="overflow-hidden">
                    <p className="text-muted text-sm leading-relaxed mt-3">{a.body}</p>
                    <div className="mt-3 inline-block bg-white text-gold-dark text-xs font-medium px-3 py-1.5 rounded-xl border border-gold/30">
                      {a.highlight}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: colors image */}
          <div className="rounded-3xl overflow-hidden">
            <Image
              src="/colors.png"
              alt="NailAI Farbvarianten"
              width={2400}
              height={900}
              className="w-full h-auto"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}
