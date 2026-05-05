export default function MachineSvg({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 220 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Body */}
      <rect x="20" y="10" width="180" height="360" rx="20" fill="#1C1810" />
      <rect x="30" y="18" width="160" height="340" rx="15" fill="#252015" />

      {/* Screen */}
      <rect x="40" y="26" width="140" height="100" rx="10" fill="#C6A97D" opacity=".12" />
      <rect x="44" y="29" width="132" height="94" rx="8" fill="#2d2315" />
      <text
        x="110"
        y="84"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontSize="14"
        fill="#C6A97D"
        fontStyle="italic"
      >
        NailAI
      </text>

      {/* Action button */}
      <rect x="55" y="145" width="110" height="28" rx="14" fill="#C6A97D" />
      <text
        x="110"
        y="164"
        textAnchor="middle"
        fontFamily="sans-serif"
        fontSize="9"
        fill="#1C1810"
        fontWeight="700"
        letterSpacing="1"
      >
        STARTEN
      </text>

      {/* Mini buttons */}
      <rect x="62" y="118" width="28" height="18" rx="5" fill="#1a150d" />
      <rect x="96" y="118" width="28" height="18" rx="5" fill="#1a150d" />
      <rect x="130" y="118" width="28" height="18" rx="5" fill="#1a150d" />

      {/* Circular port */}
      <circle cx="110" cy="278" r="66" fill="#0e0b07" />
      <circle cx="110" cy="278" r="66" stroke="#C6A97D" strokeWidth="2.5" fill="none" />
      <circle cx="110" cy="278" r="46" fill="#1a150d" />
      <circle cx="110" cy="278" r="20" fill="#C6A97D" opacity=".2" />

      {/* Gold trim ring */}
      <circle cx="110" cy="278" r="64" stroke="#C6A97D" strokeWidth="1" strokeDasharray="4 4" fill="none" opacity=".4" />
    </svg>
  );
}
