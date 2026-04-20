export type Office = {
  label: string;
  street: string;
  city: string;
  state: string;
  zip?: string;
};

export const company = {
  name: "Roach Roofing Company",
  legalName: "Roach Home Improvement, LLC",
  tagline: "#1 Premier Roofing Contractor in West & Southwest Michigan",
  website: "https://roachroofingcompany.com",
  phone: "(269) 420-6623",
  phoneHref: "tel:+12694206623",
  email: "office@roachroofing.com",
  hours: "Mon–Fri 8:00 AM – 4:00 PM · Closed weekends",
  foundedYear: 2011,
  yearsExperience: 20,
  rating: { score: 5, count: 271 },
  offices: [
    { label: "Battle Creek", street: "901 Capital Ave NE", city: "Battle Creek", state: "MI" },
    { label: "Wyoming", street: "4331 Clyde Park Ave SW", city: "Wyoming", state: "MI", zip: "49509" },
    { label: "Jackson", street: "2600 Airport Rd, Suite 100", city: "Jackson", state: "MI", zip: "49202" },
  ] as Office[],
  services: [
    "Residential roofing",
    "Commercial roofing",
    "Roof repair",
    "Roof replacement",
    "Metal roofing",
    "Siding",
    "Windows",
    "Doors",
    "Decks & patios",
    "Pole barns",
    "Garages",
    "Flooring",
  ],
  serviceAreas: [
    "Battle Creek",
    "Portage",
    "Kalamazoo",
    "Grand Rapids",
    "Muskegon",
    "Byron Center",
    "Jackson",
    "Central, Southwest & West Michigan",
  ],
  social: {
    youtube: "https://youtube.com/@roachroofingcompany",
    facebook: "https://facebook.com/brconstruction715",
  },
} as const;

export type Company = typeof company;
