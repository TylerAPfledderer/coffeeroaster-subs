import {
  VStack,
  RadioCardItem,
  RadioCardItemProps,
  RadioCardItemHiddenInput,
  RadioCardItemControl,
} from "@chakra-ui/react";
import type { ReactNode } from "react";

interface SubscribeRadioCardProps extends RadioCardItemProps {
  ariaHeadingLabel?: string;
  children: ReactNode;
}

/**
 * The individual custom radio rendered for each group in the Subscription form
 */
const SubscribeRadioCard = ({
  ariaHeadingLabel = "",
  ...props
}: SubscribeRadioCardProps) => (
  <RadioCardItem
    aria-label={ariaHeadingLabel ?? undefined}
    margin="0"
    textAlign="left"
    flex="1"
    border="none"
    background="accentSecondary.500"
    _checked={{
      background: "brand.500",
      color: "white",
      cursor: "default",
      boxShadow: "none",
    }}
    _hover={{
      "&:not([data-checked])": {
        background: "accentPrimary.500",
      },
    }}
    {...props}
  >
    <RadioCardItemHiddenInput />
    <RadioCardItemControl p="0">
      <VStack
        cursor="pointer"
        padding="24px"
        borderRadius="8px"
        gap="24px"
        alignItems="flex-start"
        // Ensure that the description elements stay inline if the headings wrap
        justifyContent="space-between"
        // Without 100% height when the cards are in a row, these visible divs will not consistently
        // stretch to the height of the group's parent.
        height="100%"
        aria-hidden="false"
      >
        {props.children}
      </VStack>
    </RadioCardItemControl>
  </RadioCardItem>
);

export default SubscribeRadioCard;
