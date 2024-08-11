import {
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
          base: "linear(gray.500 50%, transparent)",
          md: "linear(gray.500 25%, transparent)",
          xl: "linear(gray.500 50%, transparent)",
        }}
        bgColor="transparent"
        bgClip="text"
        fill="transparent"
        filter={{
          base: "opacity(0.6)",
          md: "opacity(0.5)",
          xl: "opacity(0.8)",
        }}
        fontSize={{ base: "2xl", md: "5xl", xl: "6xl" }}
        lineHeight="100%"
        marginBottom="ms-2"
        position={{ md: "absolute" }}
        textTransform="lowercase"
        zIndex={{ md: "-1" }}
      >
        Our Collection
      </Heading>
      <Stack
        as={List}
        spacing={{ base: "ms-4", xl: "ms-2" }}
        overflow="visible"
        maxWidth="full"
        mt={{ md: "ms-2", xl: "ms-4" }}
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
              <Stack
                gap="ms-1"
                textAlign={{ md: "left", xl: "center" }}
                marginLeft={{ md: "36px", xl: 0 }}
                maxWidth="255px"
              >
                <Heading
                  as="h3"
                  size="xl"
                  textTransform="capitalize"
                  // mb={{ base: "4", md: "6" }}
                >
                  {title}
                </Heading>
                <Text>{description}</Text>
              </Stack>
            </ListItem>
          );
        })}
      </Stack>
    </MainSection>
  );
}
