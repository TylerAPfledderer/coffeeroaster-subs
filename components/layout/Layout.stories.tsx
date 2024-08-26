import type { Meta, StoryObj } from "@storybook/react";
import coffeeMobileImg from "@/images/home/hero/coffeepress-mobile.jpg";
import coffeeTabletImg from "@/images/home/hero/coffeepress-tablet.jpg";
import coffeeDesktopImg from "@/images/home/hero/coffeepress-desktop.jpg";

import { Layout as LayoutComponent } from "./index";

const meta = {
  component: LayoutComponent,
  args: {
    heroData: {
      title: "Great coffee made simple.",
      description:
        "Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.",
      imageSet: {
        base: coffeeMobileImg.src,
        md: coffeeTabletImg.src,
        xl: coffeeDesktopImg.src,
      },
    },
    children: "",
  },
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof LayoutComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Layout: Story = {};
