import type { Meta, StoryObj } from "@storybook/react";

import SubscribeFormComponent from "./index";

const meta = {
  component: SubscribeFormComponent,
} satisfies Meta<typeof SubscribeFormComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SubscribeForm: Story = {};
