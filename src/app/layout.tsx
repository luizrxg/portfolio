import type {Metadata} from "next";
import localFont from "next/font/local";
import { JetBrains_Mono as MonoFont } from "next/font/google";
import "./globals.scss";
import {ReactNode} from "react";
import {cn} from "@/utils/string";

const defaultFont = localFont({
  src: "../../public/assets/fonts/chillax/Chillax-Variable.ttf",
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
      className={cn(defaultFont.className, displayFont.variable, monospacedFont.variable, glyphFont.variable)}
    >
      <body>
        {children}
      </body>
    </html>
  );
}
