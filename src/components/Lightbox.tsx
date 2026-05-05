"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  onClose: () => void;
};

export default function Lightbox({ src, alt, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-ink/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      {/* close button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center text-white text-xl transition-colors"
        aria-label="Schließen"
      >
        ✕
      </button>

      {/* image */}
      <div
        className="relative max-w-2xl w-full max-h-[85vh] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={src}
          alt={alt}
          width={800}
          height={1000}
          className="w-full h-auto object-contain max-h-[85vh]"
          priority
        />
      </div>
    </div>,
    document.body
  );
}
