import { type StyleConfig } from "@chakra-ui/react";

export const components: Record<string, StyleConfig> = {
  Heading: {
    sizes: {
      "4xl": {
        fontSize: ["2xl", null, "3xl", null, null, "4xl"],
        lineHeight: ["2", null, "2.5", null, null, "3.5"],
      },
      "3xl": {
        fontSize: "clamp(2.074rem, 1.6vw + 1.7rem, 3.157rem)",
        lineHeight: "clamp(3rem, 2.3vw + 2.5rem, 4.5rem)",
      },
      "2xl": {
        fontSize: ["xl", null, "2xl", null, null, "3xl"],
        lineHeight: "3rem",
      },
      xl: {
        fontSize: "lg",
        lineHeight: "1",
      },
    },
    defaultProps: {
      size: "2xl",
    },
  },
  Button: {
    baseStyle: {
      fontFamily: "heading",
    },
  },
  Link: {
    variants: {
      primaryButton: {
        alignItems: "center",
        backgroundColor: "brand.500",
        borderRadius: "md",
        color: "white",
        display: "inline-flex",
        fontFamily: "heading",
        fontSize: "lg",
        fontWeight: "semiBold",
        height: 12,
        justifyContent: "center",
        lineHeight: "1.2",
        minW: 12,
        px: 6,
        position: "relative",
        whiteSpace: "nowrap",
        width: "auto",
        _hover: {
          textDecoration: "none",
          backgroundColor: "brand.600",
        },
        _active: {
          backgroundColor: "brand.700",
        },
      },
    },
  },
  Accordion: {
    baseStyle: {
      button: {
        fontSize: "clamp(1.44rem, 0.5vw + 1.3rem, 1.777rem)",
        fontFamily: "heading",
      },
    },
  },
};
