import AsyncStorage from "@react-native-async-storage/async-storage";
import { getMeals } from "./get-meals";
import { MEAL_COLLECTION } from "@storage/storage-config";
import { FormData } from "src/model";
import { convertDateAndHourToDate } from "@utils/convertters";

export const createMeal = async (formData: FormData) => {
  try {
    const { name, description, inDiet, date, hour } = formData;
    const meals = await getMeals();
    const mealsIds: Array<number> = meals.map((meal) => meal.id);
    const nextMealId = !!mealsIds.length ? Math.max(...mealsIds) + 1 : 0;
    const dateAndHour = convertDateAndHourToDate(date, hour);

    await AsyncStorage.setItem(
      MEAL_COLLECTION,
      JSON.stringify([
        ...meals,
        { id: nextMealId, name, description, dateAndHour, inDiet },
      ])
    );
  } catch (error) {
    throw error;
  }
};
