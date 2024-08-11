import { extendTheme } from "@chakra-ui/react";
import { colors } from "./foundations/colors";
import { fonts, fontSizes, lineHeights } from "./foundations/typography";
import { layerStyles } from "./layer-styles";
import { components } from "./components";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: "body",
      },
      "h1,h2,h3": {
        textWrap: "balance",
      },
    },
  },
  colors,
  fonts,
  fontSizes,
  lineHeights,
  layerStyles,
  space: {
    "ms-1": "1.5rem",
    "ms-2": "3rem",
    "ms-3": "4.5rem",
    "ms-4": "6rem",
  },
  breakpoints: {
    "2xl": "1440px",
  },
  components,
});

export default theme;
