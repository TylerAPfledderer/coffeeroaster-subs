import { defineTextStyles } from "@chakra-ui/react";

export const textStyles = defineTextStyles({
  "4xl": {
    value: {
      fontSize: ["2xl", null, "3xl", null, null, "4xl"],
      lineHeight: ["2", null, "2.5", null, null, "3.5"],
    },
  },
  "3xl": {
    value: {
      fontSize: "clamp(2.074rem, 1.6vw + 1.7rem, 3.157rem)",
      lineHeight: "clamp(3rem, 2.3vw + 2.5rem, 4.5rem)",
    },
  },
  "2xl": {
    value: {
      fontSize: ["xl", null, "2xl", null, null, "3xl"],
      lineHeight: "2",
    },
  },
  xl: {
    value: {
      fontSize: ["xl", null, null, null, "2xl"],
      lineHeight: ["1.5", null, null, null, "2"],
    },
  },
  lg: {
    value: {
      fontSize: "lg",
      lineHeight: "1",
    },
  },
});
