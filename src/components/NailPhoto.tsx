"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "./Lightbox";

const placeholderColors = [
  "from-amber-100 via-stone-100 to-amber-200",
  "from-blue-100 via-indigo-50 to-purple-100",
  "from-rose-100 via-pink-50 to-fuchsia-100",
];

type Props = {
  src: string;
  alt: string;
  index: number;
  className?: string;
  style?: React.CSSProperties;
};

export default function NailPhoto({ src, alt, index, className = "", style }: Props) {
  const [error, setError] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={`relative overflow-hidden cursor-zoom-in group ${className}`}
        style={style}
        onClick={() => !error && setOpen(true)}
      >
        {!error ? (
          <>
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              onError={() => setError(true)}
            />
            {/* hover overlay */}
            <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-colors duration-200 flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white/90 rounded-full w-10 h-10 flex items-center justify-center text-ink text-lg shadow-lg">
                🔍
              </span>
            </div>
          </>
        ) : (
          <div className={`absolute inset-0 bg-gradient-to-br ${placeholderColors[index % 3]} flex flex-col items-center justify-center gap-2`}>
            <span className="text-4xl opacity-40">💅</span>
            <span className="text-xs text-ink/30 font-medium px-4 text-center">
              Foto kommt bald
            </span>
          </div>
        )}
      </div>

      {open && <Lightbox src={src} alt={alt} onClose={() => setOpen(false)} />}
    </>
  );
}
