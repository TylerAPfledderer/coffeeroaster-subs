import {
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
  FormControl,
} from "@chakra-ui/react";
import SubscribeRadioGroup, { RadioGroupProps } from "./SubscribeRadioGroup";

interface SubscribeFormItemProps {
  heading: string;
  radioGroup: RadioGroupProps;
}

/**
 * Renders an accordion item with a heading and a radio group for the subscription form.
 * @param {string} heading - The heading of the accordion item.
 * @param {RadioGroupProps} radioGroup - The radio group for the accordion item.
 */
const SubscribFormItem = ({ heading, radioGroup }: SubscribeFormItemProps) => (
  <AccordionItem border="none">
    <h3>
      <AccordionButton
        padding="0"
        justifyContent="space-between"
        color="gray.500"
      >
        <Box textAlign="left" flexBasis="70%" fontWeight="bold">
          {heading}
        </Box>
        <AccordionIcon color="brand.500" />
      </AccordionButton>
    </h3>
    <AccordionPanel padding="0" marginTop="24px">
      <FormControl as="fieldset">
        <SubscribeRadioGroup {...radioGroup} />
      </FormControl>
    </AccordionPanel>
  </AccordionItem>
);

export default SubscribFormItem;
