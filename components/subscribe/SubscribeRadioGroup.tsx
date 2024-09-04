import {
  Text,
  Stack,
  RadioCardRoot,
  RadioCardItemText,
} from "@chakra-ui/react";
import type { CurrValOptions } from "@/data/formOptionDetails";
import SubscribeRadioCard from "./SubscribeRadioCard";
import { toKebabCase } from "../../utils/functions";
import { useFormValuesContext } from "./form-value-context";

export interface RadioGroupProps {
  /**
   * Array of options to pass to each radio
   */
  radioOptions: Array<{
    name: string;
    ariaHeadingLabel?: string;
    description: string;
  }>;
  /**
   * Name of the group of radios
   */
  groupName: CurrValOptions;
}
type SubscribeRadioGroupProps = RadioGroupProps;

/**
 * Component rendering each group of radios in the subscription form
 */
const SubscribeRadioGroup = ({
  groupName,
  radioOptions,
}: SubscribeRadioGroupProps) => {
  const { currInputVals, setCurrInputVals } = useFormValuesContext();

  return (
    <RadioCardRoot
      // We are in controlled mode because this value can be reset by the user (via "Checkout")
      value={toKebabCase(currInputVals[groupName])}
      onValueChange={({ value: nextValue }) => {
        setCurrInputVals((prevState) => ({
          ...prevState,
          [groupName]: nextValue,
        }));
      }}
      name={groupName}
    >
      <Stack
        gap={{ base: "16px", md: "8px" }}
        direction={{ base: "column", md: "row" }}
      >
        {radioOptions.map(({ name, ariaHeadingLabel, description }) => {
          const nameValue = name.toLowerCase().replace(/[' ']+/g, "-");
          return (
            <SubscribeRadioCard
              key={nameValue}
              value={nameValue}
              ariaHeadingLabel={ariaHeadingLabel}
            >
              <RadioCardItemText
                fontFamily="heading"
                fontWeight="700"
                fontSize="24px"
              >
                {name}
              </RadioCardItemText>
              <Text fontSize="md">{description}</Text>
            </SubscribeRadioCard>
          );
        })}
      </Stack>
    </RadioCardRoot>
  );
};

export default SubscribeRadioGroup;
