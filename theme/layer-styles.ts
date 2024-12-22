import { defineLayerStyles } from "@chakra-ui/react";

export const layerStyles = defineLayerStyles({
  layoutBase: {
    value: {
      paddingInline: { base: "6", md: "42px", lg: "80px" },
      maxWidth: "1440px",
      marginInline: "auto",
    },
  },
  navOpened: {
    value: {
      maxHeight: "full",
      opacity: "1",
    },
  },
  navClosed: {
    value: {
      maxHeight: "0",
      opacity: "0",
    },
  },
});
