import { useEffect } from "react";
import subDetails from "@/data/subDetails.json";
import { Flex, Heading, List, ListItem, Stack, Text } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import MainSection from "../MainSection";
import { useRouter } from "next/router";

type SubscriptionDetailsProps = {
  /**
   * If this Component is rendered in the section page...
   * - Certain elements will not be rendered
   * - Different styles are used
   * - Marked as strictly `true` or `undefined` to prevent errors with short circuit evaluations
   *   in Chakra props
   */
  onSubscribePage?: true | undefined;
};

/**
 * Component that provides details on how the subscription process works.
 */
export function SubscriptionDetails({
  onSubscribePage,
}: SubscriptionDetailsProps) {
  const { asPath } = useRouter();
  useEffect(() => {
    /** Throw runtime error if the onSubscribePage prop is not used in the correct place */
    if (onSubscribePage && asPath !== "/subscribe") {
      throw new Error(
        "onSubscribePage styles and rendering are only for the Subscribe page!",
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MainSection
      alignItems={{ xl: "flex-start" }}
      borderRadius="10px"
      paddingX={{
        ...(onSubscribePage && { base: "24px", md: "42px" }),
        lg: "88px",
      }}
      paddingY={onSubscribePage && "88px"}
      marginX={{
        ...(onSubscribePage && { base: "-24px", md: "-42px" }),
        lg: 0,
      }}
      color={onSubscribePage && "white"}
      background={onSubscribePage && "darkGray.500"}
    >
      {!onSubscribePage && (
        <Heading
          fontSize="1.5rem"
          lineHeight="32px"
          color="gray.500"
          marginBottom={{ base: "92px", md: "60px" }}
          alignSelf={{ md: "flex-start" }}
        >
          How it works
        </Heading>
      )}
      <Stack
        as={List}
        spacing={{ base: "72px", md: "0" }}
        direction={{ base: "column", md: "row" }}
        alignItems={{ base: "center", md: "normal" }}
        w="full"
      >
        {subDetails.map((detail) => {
          const { step, title, description } = detail;
          return (
            <Flex
              as={ListItem}
              key={JSON.stringify(detail)}
              flexDirection="column"
              alignItems={{ base: "center", md: "flex-start" }}
              textAlign={{ md: "left" }}
              position="relative"
              paddingTop={{ md: "72px", xl: "96px" }}
              maxWidth="380px"
              paddingRight={{ md: "2", lg: "84px !important" }}
              _last={{ paddingRight: { lg: "0 !important" } }}
              // Creates the circle in the upper left of the list item
              _before={{
                md: {
                  content: `""`,
                  background: onSubscribePage ? "darkGray.500" : "white",
                  boxSize: "8",
                  borderRadius: "50%",
                  border: "2px solid",
                  borderColor: "brand.500",
                  position: "absolute",
                  top: "-16px",
                },
              }}
              _notLast={{
                md: {
                  paddingRight: "16px",
                  borderTop: "2px solid",
                  borderTopColor: "accentPrimary.500",
                },
              }}
            >
              <Stack spacing={{ base: "6", md: "10" }}>
                <Text
                  color="accentPrimary.500"
                  fontFamily="heading"
                  fontSize="72px"
                  fontWeight="bold"
                  lineHeight="100%"
                  maxWidth="100%"
                >
                  {
                    // Add a 0 in front of the iterated number
                    `0${step}`
                  }
                </Text>
                <Stack spacing="6">
                  <Heading
                    as="h3"
                    size="xl"
                    maxW={{ md: "223px", xl: "255px" }}
                    sx={{
                      textWrap: "balance",
                    }}
                  >
                    {title}
                  </Heading>
                  <Text>{description}</Text>
                </Stack>
              </Stack>
            </Flex>
          );
        })}
      </Stack>
      {!onSubscribePage && (
        <Link
          href="/subscribe"
          mt={{ base: "20", md: "6", xl: "72px" }}
          alignSelf={{ base: "center", md: "flex-start" }}
          variant="primaryButton"
        >
          Create your plan
        </Link>
      )}
    </MainSection>
  );
}
