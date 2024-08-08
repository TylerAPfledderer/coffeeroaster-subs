import {
  Box,
  Heading,
  List,
  ListItem,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import Image from "next/image";
import collectionInfo from "@/data/collectionInfo.json";
import MainSection from "../MainSection";

export function CollectionSection() {
  // For use with collectionInfo and featureInfo scroll reveals
  const [isLessThan1280] = useMediaQuery("(max-width: 1280px)");

  return (
    <MainSection>
      <Heading
        bgGradient={{
          md: "linear(gray.500 25%, transparent)",
          xl: "linear(gray.500 50%, transparent)",
        }}
        bgColor={{ base: "gray.500", md: "transparent" }}
        bgClip="text"
        fill="transparent"
        filter={{ md: "opacity(0.5)", xl: "opacity(0.8)" }}
        fontSize={{ base: "40px", md: "96px", xl: "150px" }}
        lineHeight={{ base: "72px", xl: "7rem" }}
        marginBottom="8"
        position={{ md: "absolute" }}
        textTransform="lowercase"
        zIndex={{ md: "-1" }}
      >
        Our Collection
      </Heading>
      <Stack
        as={List}
        spacing={{ base: "56px", xl: "8" }}
        overflow="visible"
        maxWidth="full"
        paddingX={{ md: "56px" }}
        direction={{ base: "column", xl: "row" }}
      >
        {collectionInfo.map((info, index) => {
          const { image, title, description } = info;

          return (
            <ListItem
              key={JSON.stringify(info)}
              display="flex"
              flexDirection={{ base: "column", md: "row", xl: "column" }}
              alignItems="center"
              paddingX={["24px", "0"]}
              data-sal={
                index % 2 && isLessThan1280 ? "slide-left" : "slide-right"
              }
              data-sal-duration="1000"
            >
              <Image
                alt=""
                src={`/images/home/collection/${image}`}
                // These sizes are required, though not used
                height="0"
                width="0"
                // Force the image size from the specified style props
                sizes="100vw"
                style={{
                  // Provide control of height and width as style props
                  width: "auto",
                  height: "184px",
                }}
              />
              <Box
                textAlign={{ md: "left", xl: "center" }}
                marginLeft={{ md: "36px", xl: 0 }}
                maxWidth="255px"
              >
                <Heading
                  as="h3"
                  size="xl"
                  textTransform="capitalize"
                  mb={{ base: "4", md: "6" }}
                >
                  {title}
                </Heading>
                <Text>{description}</Text>
              </Box>
            </ListItem>
          );
        })}
      </Stack>
    </MainSection>
  );
}
