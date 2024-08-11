import { Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { useRouter } from "next/router";

export interface HeroData {
  title: string;
  description: string;
  imageSet: {
    base: string;
    md: string;
    xl: string;
  }; // Extending Chakra's bgImage prop types
}

type HeroProps = {
  heroData: HeroData;
};

function Hero({ heroData }: HeroProps) {
  const { imageSet, description, title } = heroData;

  const { asPath } = useRouter();

  return (
    <Flex
      as="section"
      direction="column"
      alignItems={{ base: "center", md: "flex-start" }}
      bgImage={imageSet}
      bgPos="right"
      bgSize="cover"
      bgRepeat="no-repeat"
      color="white"
      textAlign={{ md: "left" }}
      padding={{ base: "100px 24px", md: "100px 56px", xl: "100px 88px" }}
      borderRadius="10px"
      marginTop="76px"
    >
      <Stack gap="ms-2" width="clamp(17.44rem, 20vw + 12.8rem, 30.75rem)">
        <Stack spacing="ms-1">
          <Heading as="h1" size="4xl">
            {title}
          </Heading>
          <Text>{description}</Text>
        </Stack>
        {asPath === "/" && (
          <Link
            alignSelf={{ base: "center", md: "flex-start" }}
            href="/subscribe"
            data-testid="hero-button"
            variant="primaryButton"
          >
            Create your plan
          </Link>
        )}
      </Stack>
    </Flex>
  );
}

export default Hero;
