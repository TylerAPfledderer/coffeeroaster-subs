import { Layout } from "@/components/layout";
import type { HeroData } from "@/components/layout/Hero";
import type { GetStaticProps, InferGetStaticPropsType } from "next/types";
import blackCupDesktop from "@/images/subscribe/hero/blackcup-desktop.jpg";
import blackCupMobile from "@/images/subscribe/hero/blackcup-mobile.jpg";
import blackCupTablet from "@/images/subscribe/hero/blackcup-tablet.jpg";
import { SubscriptionDetails } from "@/components/SubscriptionDetails";
import SubscribeForm from "@/components/subscribe/SubscribeForm";
import type { NextPageWithLayout } from "./_app";

export const getStaticProps = (() => {
  const aboutHero = {
    title: "Create a plan",
    description:
      "Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door.",
    imageSet: {
      base: blackCupMobile.src,
      md: blackCupTablet.src,
      xl: blackCupDesktop.src,
    },
  };

  return {
    props: {
      heroData: aboutHero,
    },
  };
}) satisfies GetStaticProps<{ heroData: HeroData }>;

const Subscribe: NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = () => (
  <>
    <SubscriptionDetails onSubscribePage />
    <SubscribeForm />
  </>
);

Subscribe.getLayout = function getLayout(page) {
  const { heroData } = page.props;

  return <Layout heroData={heroData}>{page}</Layout>;
};

export default Subscribe;
