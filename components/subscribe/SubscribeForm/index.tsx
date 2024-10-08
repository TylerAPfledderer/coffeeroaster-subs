import { useMemo } from "react";
import {
  Button,
  Box,
  HStack,
  VStack,
  Accordion,
  useDisclosure,
  Heading,
} from "@chakra-ui/react";
import { toKebabCase } from "@/utils/functions";
import useCurrentInputValues from "@/hooks/useCurrentInputValue";
import {
  formOptionDetails,
  type CurrValOptions,
} from "@/data/formOptionDetails";
import OrderSummary from "../OrderSummary";
import SubscribFormItem from "../SubscribeFormItem";
import MainSection from "../../MainSection";
import CheckoutModal from "../CheckoutModal";
import { FormValuesContext } from "../form-value-context";

/**
 * Form for the subscription options
 *
 * Pulls JSON Data via static query that provides the content for each group of options
 */
const SubscribeForm = () => {
  // Reduce the array of form options down to an object with the groupName as the key and the first radioOptions' name as the value
  const reduceDefaultOptionNames = () =>
    formOptionDetails.reduce<Record<string, string>>(
      (group, { radioGroupDetails }) => {
        const { groupName, radioOptions } = radioGroupDetails;
        return { ...group, [groupName]: toKebabCase(radioOptions[0].name) };
      },
      {},
    );

  /**
   * State for the currently selected values in each radio group, stored in local storage
   */
  const [currInputVals, setCurrInputVals, resetInputVals] =
    useCurrentInputValues<Record<CurrValOptions, string>>(
      "currentInputVals",
      reduceDefaultOptionNames(),
    );
  const { isOpen, onClose, onToggle } = useDisclosure();

  const formValuesCtxValue = useMemo(
    () => ({
      currInputVals,
      setCurrInputVals,
      formOptionDetails,
      resetInputVals,
      isCapsuleSelected: currInputVals["drinking-style"] === "capsule",
    }),
    [currInputVals, resetInputVals, setCurrInputVals],
  );

  return (
    <MainSection>
      <HStack
        as="form"
        width="full"
        textAlign={{ md: "left" }}
        maxWidth="730px"
      >
        <FormValuesContext.Provider value={formValuesCtxValue}>
          <Box>
            <Accordion
              as={VStack}
              spacing="96px"
              alignItems="normal"
              allowMultiple
              defaultIndex={[0]}
            >
              {
                // Iterate the Form option data from query to the form item components
                formOptionDetails.map((option) => {
                  const { name, radioGroupDetails } = option;
                  return (
                    <SubscribFormItem
                      key={JSON.stringify(option)}
                      heading={name}
                      radioGroup={radioGroupDetails}
                    />
                  );
                })
              }
            </Accordion>
            <Box
              background="darkGray.500"
              textAlign="left"
              paddingTop="32px"
              paddingBottom={{ base: "42px" }}
              paddingX={{ base: "24px", md: "44px" }}
              borderRadius="10px"
              marginTop="120px"
            >
              <Heading
                as="h2"
                color="gray.500"
                fontFamily="body"
                size="sm"
                textTransform="uppercase"
                mb="16px"
              >
                Order Summary
              </Heading>
              <OrderSummary color="white" />
            </Box>
            <Button
              variant="solid"
              colorScheme="brand"
              mt="56px"
              px="36px"
              py="24px"
              onClick={onToggle}
            >
              Create my plan!
            </Button>
          </Box>
          <CheckoutModal isOpen={isOpen} onClose={onClose} />
        </FormValuesContext.Provider>
      </HStack>
    </MainSection>
  );
};

export default SubscribeForm;
