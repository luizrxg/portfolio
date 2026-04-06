import type {Metadata} from "next";
import localFont from "next/font/local";
import { JetBrains_Mono as MonoFont } from "next/font/google";
import "./globals.scss";
import {ReactNode} from "react";
import {cn} from "@/utils/string";

const defaultFont = localFont({
  src: "../../public/assets/fonts/ranade/Ranade-Variable.ttf",
  variable: "--font-default",
});

const monospacedFont = MonoFont({
  subsets: ["latin"],
  variable: "--font-mono",
});

const displayFont = localFont({
  src: "../../public/assets/fonts/cabinet_grotesk/CabinetGrotesk-Variable.ttf",
  variable: "--font-display",
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

const comicFont = localFont({
  src: "../../public/assets/fonts/comico/Comico-Regular.ttf",
  variable: "--font-comic",
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
        displayFont.variable,
        monospacedFont.variable,
        glyphFont.variable,
        paquitoFont.variable,
        handwrittenFont.variable,
        comicFont.variable,
      )}
    >
      <body>
        {children}
      </body>
    </html>
  );
}
