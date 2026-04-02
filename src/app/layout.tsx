import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.scss";
import {ReactNode} from "react";

const defaultFont = localFont({
  src: "../../public/assets/fonts/satoshi/Satoshi-Variable.ttf",
  variable: "--font-default",
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
      className={`${defaultFont.className} ${displayFont.variable}`}
    >
      <body>
        {children}
      </body>
    </html>
  );
}
