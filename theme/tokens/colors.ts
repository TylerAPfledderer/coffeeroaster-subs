import { defineTokens } from "@chakra-ui/react";

export const colors = defineTokens.colors({
  brand: {
    500: { value: "#0e8784" },
    600: { value: "#66d2cf" },
    700: { value: "#0c7471" },
  },
  accentPrimary: {
    500: { value: "#fdd6ba" },
  },
  accentSecondary: {
    500: { value: "#f4f1eb" },
  },
  gray: { 500: { value: "#83888f" } },
  darkGray: { 500: { value: "#333d4b" } },
});
