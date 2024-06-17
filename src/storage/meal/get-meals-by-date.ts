import { Meal } from "src/model";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storage-config";

export const getMealsByDate = async (date: string): Promise<Array<Meal>> => {
  try {
    const storage = await AsyncStorage.getItem(
      `${MEAL_COLLECTION}-${date}`
    );

    return storage ? JSON.parse(storage) : [];
  } catch (error) {
    throw error;
  }
};
