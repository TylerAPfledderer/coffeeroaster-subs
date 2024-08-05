import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import customTheme from "../theme";
import { Barlow, Fraunces } from "next/font/google";

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

export default function App({ Component, pageProps }: AppProps) {
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
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
