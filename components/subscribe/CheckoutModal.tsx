import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Heading,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Show,
  SpaceProps,
  Text,
  useToast,
} from "@chakra-ui/react";
import { toKebabCase } from "@/utils/functions";
import type { FormOptionWithPrice } from "@/data/formOptionDetails";
import OrderSummary from "./OrderSummary";
import { useFormValuesContext } from "./form-value-context";

/**
 * Component to display a modal with the order summary and a button to confirm the order
 *
 * For the purposes of this project, the button on click will only reset the form values and state
 */
const CheckoutModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const { formOptionDetails, currInputVals, resetInputVals } =
    useFormValuesContext();

  const [deliveryPrice, setDeliveryPrice] = useState<string | undefined>("0");

  const confirmationToast = useToast();

  // Update visual rendering of the price
  // when the 'delivery-interval' value changes
  useEffect(() => {
    // Pull out the details from the Delivery Interval radio group inside the form data json
    const deliveryOptions = formOptionDetails.find(
      ({ radioGroupDetails }) =>
        radioGroupDetails.groupName === "delivery-interval",
    ) as FormOptionWithPrice | undefined;

    if (!deliveryOptions)
      throw new Error(
        "`delivery-interval` object not found, when it should be in the collection",
      );

    // Pull out the price from the Delivery Interval radio group details
    const currDeliveryPrice =
      deliveryOptions.radioGroupDetails.radioOptions.find(
        ({ name }) => toKebabCase(name) === currInputVals["delivery-interval"],
      )!.price;

    setDeliveryPrice(
      currDeliveryPrice?.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      }),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currInputVals["delivery-interval"]]);

  /** Passed to the PaddingX prop in the `ModalHeader`, `ModalBody`, and `ModalFooter` components */
  const modalPaddingX: SpaceProps["paddingX"] = {
    base: "24px",
    md: "56px",
  };

  /**
   * Callback to "checkout" which actually closes the modal
   * and resets the radio groups to their default selections
   */
  const handleSubmitCheckout = () => {
    resetInputVals();
    onClose();
    confirmationToast({
      title: "Order Confirmed!",
      description: "Your order has been placed and will be delivered shortly.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
      <ModalOverlay zIndex="modal" />
      <ModalContent
        borderRadius="8px"
        overflow="hidden"
        marginX="16px"
        marginY="0"
      >
        <ModalHeader
          background="darkGray.500"
          color="white"
          paddingY="6"
          paddingX={modalPaddingX}
        >
          <Heading size="xl">Order Summary</Heading>
        </ModalHeader>
        <ModalBody
          paddingTop="40px"
          paddingX={modalPaddingX}
          paddingBottom={{ base: "32px", md: "54px" }}
        >
          <OrderSummary color="gray.500" />
          <Text marginTop="16px">
            Is this correct? You can proceed to checkout or go back to plan
            selection if something is off. Subscription discount codes can also
            be redeemed at the checkout.
          </Text>
        </ModalBody>
        <ModalFooter
          paddingX={modalPaddingX}
          paddingTop="0"
          paddingBottom={{ base: "24px", md: "54px" }}
        >
          <Show above="md">
            <Heading as="span" flex="1" fontSize="2rem" aria-hidden>
              {deliveryPrice} / mo
            </Heading>
          </Show>
          <Button
            type="submit"
            colorScheme="brand"
            w="full"
            height="auto"
            paddingY="16px"
            flex="1"
            title={`Checkout with the total cost of ${deliveryPrice} per month`}
            onClick={handleSubmitCheckout}
          >
            Checkout
            <Box hideFrom="md">
              &nbsp;- <span>{deliveryPrice}</span> / mo
            </Box>
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CheckoutModal;
