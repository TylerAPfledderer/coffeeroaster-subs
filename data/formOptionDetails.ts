export type CurrValOptions =
  | "drinking-style"
  | "coffee-type"
  | "coffee-size"
  | "bean-style"
  | "delivery-interval";

export type FormOptionBasic = {
  name: string;
  radioGroupDetails: {
    groupName: CurrValOptions;
    radioOptions: Array<{ name: string; description: string }>;
  };
};

export type FormOptionWithAria = {
  name: string;
  radioGroupDetails: {
    groupName: CurrValOptions;
    radioOptions: Array<{
      name: string;
      description: string;
      ariaHeadingLabel: string;
    }>;
  };
};

export type FormOptionWithPrice = {
  name: string;
  radioGroupDetails: {
    groupName: CurrValOptions;
    radioOptions: Array<{
      name: string;
      description: string;
      price: number;
    }>;
  };
};

export type FormOptionDetails =
  | FormOptionBasic
  | FormOptionWithAria
  | FormOptionWithPrice;

export const formOptionDetails: FormOptionDetails[] = [
  {
    name: "How do you drink your coffee\u003f",
    radioGroupDetails: {
      groupName: "drinking-style",
      radioOptions: [
        {
          name: "Capsule",
          description: "Compatible with Nespresso systems and similar brewers",
        },
        {
          name: "Filter",
          description:
            "For pour-over or drip methods like Aeropress, Chemex, and V60",
        },
        {
          name: "Espresso",
          description:
            "Dense and finely ground beans for an intense, flavorful experience",
        },
      ],
    },
  },
  {
    name: "What type of coffee\u003f",
    radioGroupDetails: {
      groupName: "coffee-type",
      radioOptions: [
        {
          name: "Single Origin",
          description:
            "Distinct, high quality coffee from a specific family-owned farm",
        },
        {
          name: "Decaf",
          description:
            "Just like regular coffee, except the caffeine has been removed",
        },
        {
          name: "Blended",
          description:
            "Combination of two or three dark roasted beans of organic coffees",
        },
      ],
    },
  },
  {
    name: "How much would you like\u003f",
    radioGroupDetails: {
      groupName: "coffee-size",
      radioOptions: [
        {
          name: "250g",
          ariaHeadingLabel: "250 grams",
          description:
            "Perfect for the solo drinker. Yields about 12 delicious cups.",
        },
        {
          name: "500g",
          ariaHeadingLabel: "500 grams",
          description:
            "Perfect option for a couple. Yields about 40 delectable cups.",
        },
        {
          name: "1000g",
          ariaHeadingLabel: "1000 grams",
          description:
            "Perfect for offices and events. Yields about 90 delightful cups.",
        },
      ],
    },
  },
  {
    name: "Want us to grind them\u003f",
    radioGroupDetails: {
      groupName: "bean-style",
      radioOptions: [
        {
          name: "Wholebean",
          description: "Best choice if you cherish the full sensory experience",
        },
        {
          name: "Filter",
          description:
            "For drip or pour-over coffee methods such as V60 or Aeropress",
        },
        {
          name: "Cafetiére",
          description:
            "Course ground beans specially suited for french press coffee",
        },
      ],
    },
  },
  {
    name: "How often should we deliver\u003f",
    radioGroupDetails: {
      groupName: "delivery-interval",
      radioOptions: [
        {
          name: "Every week",
          description:
            "$7.20 per shipment. Includes free first-class shipping.",
          price: 7.2,
        },
        {
          name: "Every 2 weeks",
          description: "$9.60 per shipment. Includes free priority shipping.",
          price: 9.6,
        },
        {
          name: "Every month",
          description: "$12.00 per shipment. Includes free priority shipping.",
          price: 12.0,
        },
      ],
    },
  },
];
