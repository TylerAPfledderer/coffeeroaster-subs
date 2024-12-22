import { defaultConfig, mergeConfigs, createSystem } from "@chakra-ui/react";
import { recipes, slotRecipes } from "./components";
import { colors } from "./tokens/colors";
import { fonts, fontSizes, lineHeights } from "./tokens/typography";
import { layerStyles } from "./layer-styles";
import { textStyles } from "./text-styles";

export const config = mergeConfigs(defaultConfig, {
  globalCss: {
    body: {
      fontFamily: "body",
    },
    "h1,h2,h3": {
      textWrap: "balance",
    },
  },
  theme: {
    breakpoints: {
      "2xl": "1440px",
    },
    tokens: {
      colors,
      fonts,
      fontSizes,
      lineHeights,
      spacing: {
        "ms-1": { value: "1.5rem" },
        "ms-2": { value: "3rem" },
        "ms-3": { value: "4.5rem" },
        "ms-4": { value: "6rem" },
      },
    },
    recipes,
    slotRecipes,
    layerStyles,
    textStyles,
  },
});

export const system = createSystem(config);
