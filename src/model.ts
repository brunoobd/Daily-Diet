import { DateTime } from "luxon";

export type Meal = {
  id: number;
  name: string;
  description: string;
  date: DateTime;
  hour: DateTime;
  inDiet: boolean;
};
