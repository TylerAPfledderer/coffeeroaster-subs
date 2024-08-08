import Image from "next/image";
import { Layout } from "@/components/layout";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import type { HeroData } from "@/components/layout/Hero";
import whitecupMobile from "@/images/about/hero/whitecup-mobile.jpg";
import whitecupTablet from "@/images/about/hero/whitecup-tablet.jpg";
import whitecupDesktop from "@/images/about/hero/whitecup-desktop.jpg";
import commitmentHeaderMobile from "@/images/about/commitment/image-commitment-mobile.jpg";
import commitmentHeaderTablet from "@/images/about/commitment/image-commitment-tablet.jpg";
import commitmentHeaderDesktop from "@/images/about/commitment/image-commitment-desktop.jpg";
import qualityHeaderMobile from "@/images/about/quality/image-quality-mobile.jpg";
import qualityHeaderTablet from "@/images/about/quality/image-quality-tablet.jpg";
import qualityHeaderDesktop from "@/images/about/quality/image-quality-desktop.jpg";
import MainSection from "@/components/MainSection";
import {
  Box,
  Center,
  Flex,
  Heading,
  List,
  ListItem,
  Stack,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import headquarterInfo from "@/data/headquarterInfo.json";
import { Link } from "@chakra-ui/next-js";
import type { NextPageWithLayout } from "./_app";

export const getStaticProps = (() => {
  const aboutHero = {
    title: "About Us",
    description:
      "Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.",
    imageSet: {
      base: whitecupMobile.src,
      md: whitecupTablet.src,
      xl: whitecupDesktop.src,
    },
  };

  return {
    props: {
      heroData: aboutHero,
    },
  };
}) satisfies GetStaticProps<{ heroData: HeroData }>;

const About: NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = () => {
  const commitmentImageSrc = useBreakpointValue({
    base: commitmentHeaderMobile.src,
    md: commitmentHeaderTablet.src,
    lg: commitmentHeaderDesktop.src,
  });
  const qualityImageSrc = useBreakpointValue({
    base: qualityHeaderMobile,
    sm: qualityHeaderTablet,
    xl: qualityHeaderDesktop,
  });

  return (
    <>
      {/* Commitment Statement section */}
      <MainSection
        paddingX={{ lg: "48px", xl: "88px" }}
        justifyContent="space-between"
        flexDirection={{ base: "column", md: "row" }}
        sx={{ "& > *": { flex: 1 } }}
      >
        <Box
          mb={{ base: "48px", md: 0 }}
          mr={{ md: "40px", xl: "128px" }}
          maxWidth={{ base: "327px", xl: "445px" }}
          position="relative"
        >
          <Image
            alt=""
            src={commitmentImageSrc!}
            width={0}
            height={0}
            sizes="100vw"
            style={{
              borderRadius: "8px",
              width: "100%",
              height: "auto",
            }}
          />
        </Box>
        <Flex
          flexDirection="column"
          alignItems={{ base: "center", md: "flex-start" }}
          textAlign={{ md: "left" }}
          minWidth={{ md: "339px" }}
          maxWidth="max-content"
        >
          <Heading mb={{ base: "10", md: "6" }}>Our Commitment</Heading>
          <Text>
            We’re built on a simple mission and a commitment to doing good along
            the way. We want to make it easy for you to discover and brew the
            world’s best coffee at home. It all starts at the source. To locate
            the specific lots we want to purchase, we travel nearly 60 days a
            year trying to understand the challenges and opportunities in each
            of these places. We collaborate with exceptional coffee growers and
            empower a global community of farmers through with well above
            fair-trade benchmarks. We also offer training, support farm
            community initiatives, and invest in coffee plant science. Curating
            only the finest blends, we roast each lot to highlight tasting
            profiles distinctive to their native growing region.
          </Text>
        </Flex>
      </MainSection>

      {/* Quality Statement section */}
      <MainSection color="white">
        <Box
          bg="darkGray.500"
          position="absolute"
          zIndex="-2"
          bottom="0"
          width="full"
          height={{
            base: "calc(100% - 80px)",
            md: "calc(100% - 160px)",
            xl: "calc(100% - 88px)",
          }}
          borderRadius="10px"
        />
        <Stack
          paddingX={{ base: "24px", md: "56px", xl: "88px" }}
          paddingBottom={{ base: "64px", xl: 0 }}
          width="full"
          spacing="64px"
          alignItems="center"
          justifyContent="space-between"
          direction={{ base: "column", xl: "row-reverse" }}
        >
          <Box
            w="full"
            maxWidth={{ base: "573px", xl: "445px" }}
            marginBottom={{ xl: "88px" }}
          >
            <Image
              alt=""
              src={qualityImageSrc!}
              width={0}
              height={0}
              sizes="100vw"
              style={{
                borderRadius: "8px",
                width: "100%",
                height: "auto",
              }}
            />
          </Box>
          <VStack
            spacing="6"
            textAlign={{ xl: "left" }}
            alignItems={{ xl: "flex-start" }}
          >
            <Heading>Uncompromised quality</Heading>
            <Text>
              Although we work with growers who pay close attention to all
              stages of harvest and processing, we employ, on our end, a
              rigorous quality control program to avoid over-roasting or baking
              the coffee dry. Every bag of coffee is tagged with a roast date
              and batch number. Our goal is to roast consistent, user-friendly
              coffee, so that brewing is easy and enjoyable.
            </Text>
          </VStack>
        </Stack>
      </MainSection>

      {/* Headquarters section */}
      <MainSection paddingX={{ xl: "88px" }}>
        <Heading
          fontSize="1.5rem"
          lineHeight="32px"
          color="gray.500"
          marginBottom={{ base: "72px", md: "60px" }}
          alignSelf={{ md: "flex-start" }}
        >
          Our headquarters
        </Heading>
        <Stack
          as={List}
          spacing={{ base: "88px", md: "72px" }}
          direction={{ base: "column", md: "row" }}
          width="full"
        >
          {headquarterInfo.map((info) => {
            const { country, street, city, state, tel } = info;
            const svgName = country.toLowerCase().replace(/\s/g, "-");
            return (
              <VStack
                key={JSON.stringify(info)}
                as={ListItem}
                spacing="12"
                alignItems={{ base: "center", md: "flex-start" }}
                textAlign={{ md: "left" }}
                flex="1"
              >
                <Center maxW="40px" flexBasis="48px" w="full">
                  <Image
                    alt=""
                    src={`/images/about/headquarters/${svgName}.svg`}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  />
                </Center>
                <VStack spacing="6" alignItems="inherit">
                  <Heading as="span" display="block">
                    {country}
                  </Heading>
                  <Text>
                    {street}
                    <br />
                    {city}
                    <br />
                    {state}
                    <br />
                    <Link href={`tel:${tel}`} isExternal>
                      {tel}
                    </Link>
                  </Text>
                </VStack>
              </VStack>
            );
          })}
        </Stack>
      </MainSection>
    </>
  );
};

About.getLayout = function getLayout(page) {
  const { heroData } = page.props;

  return <Layout heroData={heroData}>{page}</Layout>;
};

export default About;
