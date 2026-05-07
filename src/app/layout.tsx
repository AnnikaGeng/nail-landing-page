import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "NailPrinter – Professionelle Nagelkunst in 30 Sekunden",
  description:
    "KI-gestützte Nageldruckmaschine für Nagelstudios, Friseursalons und Beauty-SPAs. Unter 1 € Materialkosten pro Hand.",
  metadataBase: new URL("https://nailprinter.beauty"),
  openGraph: {
    title: "NailPrinter – Professionelle Nagelkunst in 30 Sekunden",
    description:
      "Vollautomatische Nageldesigns für unter 1 € – bis zu 20 € Einnahmen pro Behandlung. Kein Fachpersonal nötig.",
    url: "https://nailprinter.beauty",
    siteName: "NailPrinter",
    locale: "de_DE",
    type: "website",
    images: [{ url: "/gallery.png", width: 1044, height: 762, alt: "NailPrinter Designbibliothek" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NailPrinter – Professionelle Nagelkunst in 30 Sekunden",
    description: "Vollautomatische Nageldesigns für unter 1 € – bis zu 20 € Einnahmen pro Behandlung.",
    images: ["/gallery.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${playfair.variable} ${dmSans.variable} scroll-smooth`}>
      <body className="font-[family-name:var(--font-dm-sans)] antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
