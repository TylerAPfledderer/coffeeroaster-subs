import { defineRecipe, defineSlotRecipe } from "@chakra-ui/react";

const heading = defineRecipe({
  variants: {
    size: {
      "4xl": {
        textStyle: "4xl",
      },
      "3xl": {
        textStyle: "3xl",
      },
      "2xl": {
        textStyle: "2xl",
      },
      xl: {
        textStyle: "xl",
      },
      lg: {
        textStyle: "lg",
      },
    },
  },
  defaultVariants: {
    size: "2xl",
  },
});

const button = defineRecipe({
  base: {
    fontFamily: "heading",
  },
});

const link = defineRecipe({
  variants: {
    variant: {
      primaryButton: {
        backgroundColor: "brand.500",
        borderRadius: "md",
        color: "white",
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
});

const accordion = defineSlotRecipe({
  slots: ["itemTrigger"],
  base: {
    itemTrigger: {
      fontSize: "clamp(1.44rem, 0.5vw + 1.3rem, 1.777rem)",
      fontFamily: "heading",
    },
  },
});

export const recipes = { button, heading, link };

export const slotRecipes = { accordion };
