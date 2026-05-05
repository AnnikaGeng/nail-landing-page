const steps = [
  { n: 1, emoji: "🩹", title: "Schutzstreifen", desc: "Ablösbaren Nagelschutzstreifen anbringen" },
  { n: 2, emoji: "✨", title: "NM-Reiniger", desc: "Ablösbaren NM-Reinigungskleber auftragen" },
  { n: 3, emoji: "🖌️", title: "PG4-Beschichtung", desc: "PG4-Druckbeschichtungskleber gleichmäßig verteilen" },
  { n: 4, emoji: "🎨", title: "Design drucken", desc: "Finger einlegen - KI druckt automatisch in 30 Sek." },
  { n: 5, emoji: "💎", title: "Versiegeln", desc: "Wasserfreien Versiegelungskleber auftragen - fertig!" },
];

export default function StepsSection() {
  return (
    <section id="ablauf" className="bg-cream px-8 lg:px-16 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs font-medium uppercase tracking-[.14em] text-gold-dark mb-3 block">
            Der Ablauf
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl lg:text-4xl font-bold text-ink">
            In <em className="text-gold-dark">5 einfachen Schritten</em> zum{" "}
            perfekten Ergebnis
          </h2>
          <p className="text-muted mt-3 max-w-md mx-auto leading-relaxed">
            Kein Vorwissen nötig. Einfach einlegen, auswählen, fertig.
          </p>
        </div>

        {/* relative container for the connector line */}
        <div className="relative grid grid-cols-2 lg:grid-cols-5 gap-4">
          {/* gold connector line (desktop only) */}
          <div className="absolute top-14 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-gold to-transparent hidden lg:block" />

          {steps.map((s) => (
            <div
              key={s.n}
              className="relative flex flex-col items-center text-center bg-white rounded-2xl px-4 pt-6 pb-5 border border-gold/20 hover:-translate-y-1 hover:shadow-xl hover:shadow-gold/15 transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-full bg-ink flex items-center justify-center font-[family-name:var(--font-playfair)] text-gold font-bold text-base mb-4 relative z-10">
                {s.n}
              </div>
              <span className="text-3xl mb-3">{s.emoji}</span>
              <h4 className="font-[family-name:var(--font-playfair)] font-semibold text-ink text-sm mb-1">
                {s.title}
              </h4>
              <p className="text-xs text-muted leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
