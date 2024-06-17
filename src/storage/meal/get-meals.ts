import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storage-config";
import { Meal } from "src/model";

export const getMeals = async (): Promise<Array<Meal>> => {
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION);
    const meals: Array<Meal> = storage ? JSON.parse(storage) : [];

    return meals.sort(
      (a: Meal, b: Meal) =>
        new Date(b.dateAndHour).getTime() - new Date(a.dateAndHour).getTime()
    );
  } catch (error) {
    throw error;
  }
};
