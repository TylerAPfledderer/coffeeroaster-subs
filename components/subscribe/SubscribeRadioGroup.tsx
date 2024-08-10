import { useRadioGroup, Text, Heading, Stack } from "@chakra-ui/react";
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

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: groupName,
    onChange: (nextValue) => {
      setCurrInputVals((prevState) => ({
        ...prevState,
        [groupName]: nextValue,
      }));
    },
    // We are in controlled mode because this value can be reset by the user (via "Checkout")
    value: toKebabCase(currInputVals[groupName]),
  });

  const group = getRootProps();

  return (
    <Stack
      {...group}
      spacing={{ base: "16px", md: "8px" }}
      direction={{ base: "column", md: "row" }}
    >
      {radioOptions.map(({ name, ariaHeadingLabel, description }) => {
        const nameValue = name.toLowerCase().replace(/[' ']+/g, "-");
        const radio = getRadioProps({ value: nameValue });
        return (
          <SubscribeRadioCard
            key={nameValue}
            {...radio}
            ariaHeadingLabel={ariaHeadingLabel}
          >
            <Heading as="span" fontSize="24px">
              {name}
            </Heading>
            <Text>{description}</Text>
          </SubscribeRadioCard>
        );
      })}
    </Stack>
  );
};

export default SubscribeRadioGroup;
