import { Meal } from "src/model";
import { getMeals } from "./get-meals";

export const getMealById = async (
  mealId: number
): Promise<Meal | undefined> => {
  try {
    const meals = await getMeals();

    return meals.find((meal) => meal.id === mealId);
  } catch (error) {
    throw error;
  }
};
