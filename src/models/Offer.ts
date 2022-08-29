import { Company } from "./Company";

export type Offer = {
  company: Company;
  location: string;
  paidPerHour: number;
  hoursPerDay: number;
};
