import { extendTheme } from "@chakra-ui/react";
import { colors } from "./foundations/colors";
import { fonts } from "./foundations/typography";
import { layerStyles } from "./layer-styles";
import { components } from "./components";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: "body",
      },
    },
  },
  colors,
  fonts,
  layerStyles,
  components,
});

export default theme;
