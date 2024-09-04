import type { AppProps } from "next/app";
import { Barlow, Fraunces } from "next/font/google";
import { useEffect, type ReactElement, type ReactNode } from "react";
import type { NextPage } from "next/types";
import "global.css";
import sal from "sal.js";
import { ThemeProvider } from "@/components/ThemeProvider";

const barlowFont = Barlow({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-barlow",
  display: "swap",
});

const frauncesFont = Fraunces({
  subsets: ["latin"],
  weight: ["400", "900"],
  variable: "--font-fraunces",
  display: "swap",
});

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  useEffect(() => {
    sal();
  });
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-barlow: ${barlowFont.style.fontFamily};
            --font-fraunces: ${frauncesFont.style.fontFamily};
          }
        `}
      </style>
      <ThemeProvider>{getLayout(<Component {...pageProps} />)}</ThemeProvider>
    </>
  );
}
