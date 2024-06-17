import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storage-config";
import { getMeals } from "./get-meals";

export const deleteMeal = async (mealId: number) => {
  try {
    const meals = await getMeals();
    const mealsFiltered = meals.filter((meal) => meal.id !== mealId);

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(mealsFiltered));
  } catch (error) {
    throw error;
  }
};
