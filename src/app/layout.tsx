import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.scss";
import {ReactNode} from "react";
import {cn} from "@/utils/string";
import FluidGlass from "@/components/fluid-glass/fluid-glass";

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
      className={cn(defaultFont.className, displayFont.variable)}
    >
      <body>
        {children}
        <FluidGlass
          mode="lens"
          lensProps={{
            scale: 0.25,
            ior: 1.15,
            thickness: 5,
            chromaticAberration: 0.1,
            anisotropy: 0.01
          }}
        />
      </body>
    </html>
  );
}
