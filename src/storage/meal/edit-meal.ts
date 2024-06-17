import AsyncStorage from "@react-native-async-storage/async-storage";
import { getMeals } from "./get-meals";
import { MEAL_COLLECTION } from "@storage/storage-config";
import { Meal } from "src/model";

export const editMeal = async (meal: Meal) => {
  try {
    const meals = await getMeals();
    const mealsFiltered = meals.filter(
      (mealsFiltered) => mealsFiltered.id !== meal.id
    );

    await AsyncStorage.setItem(
      MEAL_COLLECTION,
      JSON.stringify([...mealsFiltered, meal])
    );
  } catch (error) {
    throw error;
  }
};
