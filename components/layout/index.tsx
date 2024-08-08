import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";
import NavBar from "./NavBar";
import Hero, { type HeroData } from "./Hero";
import Footer from "./Footer";

type LayoutProps = {
  heroData: HeroData;
  children: ReactNode;
};

export function Layout({ children, heroData }: LayoutProps) {
  return (
    <Box
      textAlign="center"
      // ? Having to add this overflow for the scroll reveal seems like a bug
      overflowX="hidden"
      layerStyle="layoutBase"
    >
      <NavBar />
      <Box as="header" maxW="1440px" mx="auto">
        <Hero heroData={heroData} />
      </Box>
      {children}
      <Footer />
    </Box>
  );
}
