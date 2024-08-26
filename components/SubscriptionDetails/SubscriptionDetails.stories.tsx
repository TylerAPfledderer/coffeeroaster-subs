import type { Meta, StoryObj } from "@storybook/react";

import { SubscriptionDetails } from ".";

const meta = {
  component: SubscriptionDetails,
  argTypes: {
    onSubscribePage: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof SubscriptionDetails>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  argTypes: {
    onSubscribePage: {
      table: {
        disable: true,
      },
    },
  },
};

export const OnSubscribePage: Story = {
  parameters: {
    nextjs: {
      router: {
        asPath: "/subscribe",
      },
    },
  },
  args: {
    onSubscribePage: true,
  },
};
