import { chakra, type HTMLChakraProps } from "@chakra-ui/react";
import { forwardRef } from "react";

/**
 * Wrapper component for the high-level section elements on each page.
 *
 * It provides consistency for the layout and spacing of each instance.
 *
 * Forwards chakra props from the parent for any specific cases with layout or color.
 */
const MainSection = forwardRef<"section", HTMLChakraProps<"section">>(
  ({ children, ...props }, ref) => (
    <chakra.section
      position="relative"
      marginTop="32"
      display="flex"
      alignItems="center"
      flexDirection={{ base: "column" }}
      {...props}
      ref={ref}
    >
      {children}
    </chakra.section>
  ),
);

MainSection.displayName = "MainSection";

export default MainSection;
