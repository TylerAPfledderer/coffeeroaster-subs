import type { Meta, StoryObj } from "@storybook/react";

import { CollectionSection as CollectionSectionComponent } from "./index";

const meta = {
  component: CollectionSectionComponent,
} satisfies Meta<typeof CollectionSectionComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CollectionSection: Story = {};
