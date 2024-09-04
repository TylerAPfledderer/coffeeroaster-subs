import { defineTokens } from "@chakra-ui/react";

export const fonts = defineTokens.fonts({
  heading: {
    value: "var(--font-fraunces)",
  },
  body: {
    value: "var(--font-barlow)",
  },
});

export const fontSizes = defineTokens.fontSizes({
  "7xl": { value: "9.969rem" }, // 159px
  "6xl": { value: "7.478rem" }, // 107px
  "5xl": { value: "5.61rem" }, // 90px
  "4xl": { value: "4.209rem" }, // 67px
  "3xl": { value: "3.157rem" }, // 50px
  "2xl": { value: "2.369rem" }, // 38px
  xl: { value: "1.777rem" }, // 28px
  lg: { value: "1.333rem" }, // 21px
  md: { value: "1rem" }, // 16px
  sm: { value: "0.75rem" }, // 12px
});

export const lineHeights = defineTokens.lineHeights({
  "3.5": { value: "5.25rem" },
  3: { value: "4.5rem" },
  "2.5": { value: "3.75rem" },
  2: { value: "3rem" },
  "1.5": { value: "2.25rem" },
  1: { value: "1.5rem" },
});
