import type { NextPageWithLayout } from "./_app";
import { Layout } from "@/components/layout";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import type { HeroData } from "@/components/layout/Hero";
import coffeeMobileImg from "../public/images/home/hero/coffeepress-mobile.jpg";
import coffeeTabletImg from "../public/images/home/hero/coffeepress-tablet.jpg";
import coffeeDesktopImg from "../public/images/home/hero/coffeepress-desktop.jpg";

export const getStaticProps = (() => {
  const indexHero = {
    title: "Great coffee made simple.",
    description:
      "Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.",
    imageSet: {
      base: coffeeMobileImg.src,
      md: coffeeTabletImg.src,
      xl: coffeeDesktopImg.src,
    },
  };

  return {
    props: {
      heroData: indexHero,
    },
  };
}) satisfies GetStaticProps<{ heroData: HeroData }>;

const Home: NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = () => {
  return <div>Home</div>;
};

Home.getLayout = function getLayout(page) {
  const { heroData } = page.props;

  return <Layout heroData={heroData}>{page}</Layout>;
};

export default Home;
