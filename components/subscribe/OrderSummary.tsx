import {
  forwardRef,
  Heading,
  HeadingProps,
  Mark,
  Text,
  useHighlight,
} from "@chakra-ui/react";
import { kebabToNormalString } from "../../utils/functions";
import { useFormValuesContext } from "./form-value-context";

/**
 * Component that renders the details of the subscription order.
 * - Pulls in context from the values updated in the form.
 * - Has Chakra props forwarded to change styling between the page and modal instances.
 */
const SubscribeOrderSummary = forwardRef<HeadingProps, "p">((props, ref) => {
  const { currInputVals, isCapsuleSelected } = useFormValuesContext();

  // The values displayed in the order summary
  const drinkingStyle = kebabToNormalString(currInputVals["drinking-style"]);
  const coffeeType = kebabToNormalString(currInputVals["coffee-type"]);
  const coffeeSize = kebabToNormalString(currInputVals["coffee-size"]);
  const beanStyle = kebabToNormalString(currInputVals["bean-style"]);
  const deliveryInterval = kebabToNormalString(
    currInputVals["delivery-interval"],
  );

  const summaryChunks = useHighlight({
    text: `${"\u201C"}I drink my coffee as ${drinkingStyle}, with a ${coffeeType} type of bean. ${coffeeSize} ${!isCapsuleSelected && `ground ala ${beanStyle}`}, sent to me ${deliveryInterval}.${"\u201D"}`,
    query: [drinkingStyle, coffeeType, coffeeSize, beanStyle, deliveryInterval],
  });

  return (
    <Heading
      as={Text}
      fontSize="xl"
      lineHeight="2"
      maxWidth="none"
      {...props}
      ref={ref}
    >
      {summaryChunks.map(({ match, text }) => {
        if (!match) return text;

        return (
          <Mark key={text} color="brand.500">
            {text}
          </Mark>
        );
      })}
    </Heading>
  );
});

export default SubscribeOrderSummary;
