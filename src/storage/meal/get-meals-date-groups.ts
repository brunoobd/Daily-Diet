import { Meal } from "src/model";
import { getMeals } from "./get-meals";
import { formatDate } from "@utils/formatters";

export const getMealsDateGroups = async (): Promise<
  Array<{ title: string; data: Array<Meal> }>
> => {
  try {
    const meals = await getMeals();

    if (meals.length) {
      let mealDatesGroups: Map<string, Array<Meal>> = new Map();

      await Promise.all(
        meals.map((meal) => {
          const mealDate = formatDate(meal.dateAndHour);
          const mealsByDate = mealDatesGroups.get(mealDate);

          if (mealsByDate?.length) {
            mealsByDate.push(meal);
            mealDatesGroups.set(mealDate, mealsByDate);
          } else {
            mealDatesGroups.set(mealDate, new Array(meal));
          }
        })
      );

      return [...mealDatesGroups.keys()].map((key) => ({
        title: key,
        data: mealDatesGroups.get(key) ?? [],
      }));
    }

    return [];
  } catch (error) {
    throw error;
  }
};
