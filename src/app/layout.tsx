import type { Metadata } from "next";
import { Asap, Asap_Condensed } from "next/font/google";
import "./globals.scss";
import {ReactNode} from "react";

const asap = Asap({
  variable: "--font-asap",
  subsets: ["latin"],
});

const asapCondensed = Asap_Condensed({
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  variable: "--font-asap-condensed",
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
      className={`${asap.variable} ${asapCondensed.variable}`}
    >
      <body>
        {children}
      </body>
    </html>
  );
}
