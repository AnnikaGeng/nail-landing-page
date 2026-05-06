import Image from "next/image";

export default function StepsSection() {
  return (
    <section id="ablauf" className="bg-cream px-8 lg:px-16 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
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

        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden" style={{ backgroundColor: "var(--color-cream)" }}>
          <Image
            src="/steps.png"
            alt="5 Schritte zum perfekten Nageldruck"
            width={2660}
            height={904}
            className="w-full h-auto"
            style={{ mixBlendMode: "multiply" }}
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}
