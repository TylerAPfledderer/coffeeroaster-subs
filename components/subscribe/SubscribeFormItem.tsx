import {
  AccordionItem,
  Box,
  AccordionItemTrigger,
  AccordionItemIndicator,
  AccordionItemContent,
  FieldRoot,
} from "@chakra-ui/react";
import { LuChevronDown } from "react-icons/lu";
import SubscribeRadioGroup, { RadioGroupProps } from "./SubscribeRadioGroup";
import { useFormValuesContext } from "./form-value-context";

interface SubscribeFormItemProps {
  heading: string;
  radioGroup: RadioGroupProps;
}

/**
 * Renders an accordion item with a heading and a radio group for the subscription form.
 */
const SubscribFormItem = ({ heading, radioGroup }: SubscribeFormItemProps) => {
  const { isCapsuleSelected } = useFormValuesContext();

  return (
    <AccordionItem
      value={radioGroup.groupName}
      border="none"
      disabled={isCapsuleSelected && heading === "Want us to grind them?"}
    >
      <h3>
        <AccordionItemTrigger
          padding="0"
          justifyContent="space-between"
          color="gray.500"
        >
          <Box textAlign="left" flexBasis="70%" fontWeight="bold">
            {heading}
          </Box>
          <AccordionItemIndicator _icon={{ color: "brand.500" }}>
            <LuChevronDown />
          </AccordionItemIndicator>
        </AccordionItemTrigger>
      </h3>
      <AccordionItemContent padding="0" marginTop="24px">
        <FieldRoot as="fieldset">
          <SubscribeRadioGroup {...radioGroup} />
        </FieldRoot>
      </AccordionItemContent>
    </AccordionItem>
  );
};

export default SubscribFormItem;
