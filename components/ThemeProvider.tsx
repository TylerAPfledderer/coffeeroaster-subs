import { ChakraProvider } from "@chakra-ui/react";
import type { ReactNode } from "react";
import { system } from "../theme";

export const ThemeProvider = ({ children }: { children: ReactNode }) => (
  <ChakraProvider value={system}>{children}</ChakraProvider>
);
