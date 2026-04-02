import type { Metadata } from "next";
import { Asap as DefaultFont, Lilita_One as CondensedFont } from "next/font/google";
import "./globals.scss";
import {ReactNode} from "react";
import { gsap } from "gsap";

const defaultFont = DefaultFont({
  variable: "--font-default",
  subsets: ["latin"],
});

const condensedFont = CondensedFont({
  weight: [
    // '100',
    // '200',
    // '300',
    '400',
    // '500',
    // '600',
    // '700',
    // '800',
    // '900'
  ],
  variable: "--font-condensed",
  subsets: ["latin"],
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
      className={`${defaultFont.className} ${condensedFont.variable}`}
    >
      <body>
        {children}
      </body>
    </html>
  );
}
