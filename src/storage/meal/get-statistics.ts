import { Statistics } from "src/model";
import { getMeals } from "./get-meals";

export const getStatistics = async (): Promise<Statistics> => {
  const meals = await getMeals();
  const registeredMeals = meals.length;
  const mealsInDiet = meals.reduce(
    (acc, meal) => {
      if (meal.inDiet) {
        acc.in++;
      } else {
        acc.out++;
      }

      return acc;
    },
    { in: 0, out: 0 }
  );
  const percentInDiet =
    meals.length === 0
      ? 0
      : parseFloat(((mealsInDiet.in * 100) / registeredMeals).toFixed(2));
  const inDiet = percentInDiet >= 50;

  let mealInDietSequency = 0;
  let greaterMealSequency = 0;

  meals.map((meal) => {
    if (meal.inDiet) {
      mealInDietSequency++;

      if (mealInDietSequency > greaterMealSequency) {
        greaterMealSequency = mealInDietSequency;
      }
    } else {
      mealInDietSequency = 0;
    }
  });

  return {
    inDiet,
    percentInDiet,
    registeredMeals,
    mealsInDiet: mealsInDiet.in,
    mealsOutDiet: mealsInDiet.out,
    greaterMealSequency,
  };
};
