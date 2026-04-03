import type {Metadata} from "next";
import localFont from "next/font/local";
import { JetBrains_Mono as MonoFont } from "next/font/google";
import "./globals.scss";
import {ReactNode} from "react";
import {cn} from "@/utils/string";

const defaultFont = localFont({
  src: "../../public/assets/fonts/satoshi/Satoshi-Variable.ttf",
  variable: "--font-default",
});

const monospacedFont = MonoFont({
  subsets: ["latin"],
  variable: "--font-mono",
});

const displayFont = localFont({
  src: "../../public/assets/fonts/clash_display/ClashDisplay-Variable.ttf",
  variable: "--font-display",
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
      className={cn(defaultFont.className, displayFont.variable, monospacedFont.variable)}
    >
      <body>
        {children}
      </body>
    </html>
  );
}
