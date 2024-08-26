import type { Meta, StoryObj } from "@storybook/react";

import { FeaturesSection as FeaturesSectionComponent } from ".";

const meta = {
  component: FeaturesSectionComponent,
} satisfies Meta<typeof FeaturesSectionComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FeaturesSection: Story = {};
