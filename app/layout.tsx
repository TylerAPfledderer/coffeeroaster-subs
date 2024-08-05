import type { Metadata } from "next";
import { Fraunces, Barlow } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const barlowFont = Barlow({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-barlow",
});

const frauncesFont = Fraunces({
  subsets: ["latin"],
  weight: ["400", "900"],
  variable: "--font-fraunces",
});

export const metadata: Metadata = {
  title: "Coffeeroasters",
  description:
    "Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.",
  authors: [{ name: "Tyler Pfledderer", url: "https://tylerpweb.dev" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${barlowFont.variable} ${frauncesFont.variable}`}
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
