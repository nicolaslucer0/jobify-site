import { Offer } from "../models/Offer";

export const fetchOffers = (): Offer[] => [
  {
    company: {
      id: 1,
      name: "Mc Donalds",
      isRecommended: true,
    },
    location: "Aveninda Santa Rosa 1500, Castelar, Buenos Aires",
    paidPerHour: 500,
    hoursPerDay: 8,
  },
  {
    company: {
      id: 2,
      name: "Lo de carlitos",
      isRecommended: true,
    },
    location: "Aveninda Santa Rosa 1501, Castelar, Buenos Aires",
    paidPerHour: 501,
    hoursPerDay: 8,
  },
  {
    company: {
      id: 3,
      name: "Mc Donalds",
      isRecommended: true,
    },
    location: "Aveninda Santa Rosa 1502, Castelar, Buenos Aires",
    paidPerHour: 502,
    hoursPerDay: 8,
  },
];
