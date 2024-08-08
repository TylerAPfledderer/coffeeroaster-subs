import {
  Box,
  Center,
  Heading,
  List,
  ListItem,
  Stack,
  Text,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import featuresInfo from "@/data/featuresInfo.json";
import MainSection from "../MainSection";

export function FeaturesSection() {
  // For use with collectionInfo and featureInfo scroll reveals
  const [isLessThan1280] = useMediaQuery("(max-width: 1280px)");

  return (
    <MainSection color="white">
      <Box
        bg="darkGray.500"
        borderRadius="10px"
        height={{ base: "902px", md: "573px" }}
        position="absolute"
        zIndex="-2"
        top="0"
        width="full"
      />
      <Box px={{ base: "6", md: "14" }} pt="16">
        <VStack spacing="6" marginBottom="72px" maxWidth="540px" mx="auto">
          <Heading>Why choose us?</Heading>
          <Text>
            A large part of our role is choosing which particular coffees will
            be featured in our range. This means working closely with the best
            coffee growers to give you a more impactful experience on every
            level.
          </Text>
        </VStack>
        <Stack as={List} spacing="6" direction={{ base: "column", xl: "row" }}>
          {featuresInfo.map((feature, index) => {
            const { iconSrc, title, description } = feature;
            return (
              <Center
                key={JSON.stringify(feature)}
                as={ListItem}
                borderRadius="8px"
                flexDirection={{ base: "column", md: "row", xl: "column" }}
                rowGap={{ base: "14", md: "0", xl: "14" }}
                columnGap="14"
                bg="brand.500"
                padding={{
                  base: "58px 24px",
                  md: "42px 48px 42px 48px",
                  xl: "72px 48px 56px",
                }}
                maxW="xl"
                data-sal={index % 2 && isLessThan1280 ? "flip-down" : "flip-up"}
                data-sal-duration="1000"
              >
                <Center
                  boxSize={{ base: "72px", md: "14", xl: "72px" }}
                  flexShrink={0}
                  position="relative"
                >
                  <Image src={`/images/home/features/${iconSrc}`} alt="" fill />
                </Center>
                <Stack spacing="4" textAlign={{ md: "left", xl: "center" }}>
                  <Heading as="h3" size="xl" textTransform="capitalize">
                    {title}
                  </Heading>
                  <Text>{description}</Text>
                </Stack>
              </Center>
            );
          })}
        </Stack>
      </Box>
    </MainSection>
  );
}
