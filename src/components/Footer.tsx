import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-white/[.06] px-8 lg:px-16 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
      <span className="font-[family-name:var(--font-playfair)] text-lg font-bold text-white">
        Nail<span className="text-gold">AI</span>
      </span>
      <Image src="/certificate.png" alt="CE LVD CE EMC FCC" width={132} height={66} className="opacity-70 hover:opacity-100 transition-opacity" unoptimized />
      <p className="text-white/35 text-sm">© 2025 NailAI · Alle Rechte vorbehalten</p>
      <div className="flex gap-6">
        {["Impressum", "Datenschutz", "Kontakt"].map((l) => (
          <a key={l} href="#" className="text-sm text-white/40 hover:text-gold transition-colors">
            {l}
          </a>
        ))}
      </div>
    </footer>
  );
}
