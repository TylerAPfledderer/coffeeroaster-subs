import { Box, ChakraProvider } from "@chakra-ui/react";
import type { Preview } from "@storybook/react";
import customTheme from "../theme";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <ChakraProvider theme={customTheme}>
        <Box textAlign="center" layerStyle="layoutBase">
          <Story />
        </Box>
      </ChakraProvider>
    ),
  ],
};

export default preview;
