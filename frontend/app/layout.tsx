import type { Metadata } from "next";
import {
  Inter,
  Roboto_Mono,
  Montserrat,
  Playfair_Display,
} from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "prep CLONE",
  description: "prep CLONE",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const playfair_display = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair-display",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${roboto_mono.variable} ${montserrat.variable} ${playfair_display.variable} bg-white container mx-auto`}
      >
        {children}
      </body>
    </html>
  );
}
