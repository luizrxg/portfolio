import type {Metadata} from "next";
import localFont from "next/font/local";
import { JetBrains_Mono as MonoFont, Sixtyfour as ArcadeFont } from "next/font/google";
import "./globals.scss";
import {ReactNode} from "react";
import {cn} from "@/utils/string";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  preventOverlaps: true,
});

const defaultFont = localFont({
  src: "../../public/assets/fonts/ranade/Ranade-Variable.ttf",
  variable: "--font-default",
});

const monospacedFont = MonoFont({
  subsets: ["latin"],
  variable: "--font-mono",
});

const arcadeFont = ArcadeFont({
  subsets: ["latin"],
  variable: "--font-arcade",
});

const displayFont = localFont({
  src: "../../public/assets/fonts/cabinet_grotesk/CabinetGrotesk-Variable.ttf",
  variable: "--font-display",
});

const display2Font = localFont({
  src: "../../public/assets/fonts/clash_display/ClashDisplay-Variable.ttf",
  variable: "--font-display-2",
});

const glyphFont = localFont({
  src: "../../public/assets/fonts/array/Array-Semibold.ttf",
  variable: "--font-glyph",
});

const paquitoFont = localFont({
  src: "../../public/assets/fonts/paquito/Paquito-Variable.ttf",
  variable: "--font-serif",
});

const handwrittenFont = localFont({
  src: "../../public/assets/fonts/kalam/Kalam-Variable.ttf",
  variable: "--font-handwritten",
});

export const metadata: Metadata = {
  title: "Luiz Gomes | Front-end Dev",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {

  return (
    <html
      lang="en"
      className={cn(
        defaultFont.className,
        monospacedFont.variable,
        arcadeFont.variable,
        displayFont.variable,
        display2Font.variable,
        glyphFont.variable,
        paquitoFont.variable,
        handwrittenFont.variable
      )}
    >
      <body>
        {children}
      </body>
    </html>
  );
}
