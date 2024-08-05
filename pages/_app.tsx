import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import customTheme from "../theme";
import { Barlow, Fraunces } from "next/font/google";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next/types";

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
      <ChakraProvider theme={customTheme}>
        {getLayout(<Component {...pageProps} />)}
      </ChakraProvider>
    </>
  );
}
