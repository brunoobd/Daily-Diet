import { Loading } from "@components/loading";
import { MealForm } from "@components/mealForm";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { editMeal } from "@storage/meal/edit-meal";
import { getMealById } from "@storage/meal/get-meal-by-id";
import { convertDateAndHourToDate } from "@utils/convertters";
import { useCallback, useState } from "react";
import { FormData } from "src/model";

type RouteParams = {
  mealId: number;
};

export const EditMeal = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [defaultValues, setDefaultValues] = useState<FormData>();
  const { navigate } = useNavigation();
  const { mealId } = useRoute().params as RouteParams;

  const onSubmit = async (formData: FormData) => {
    const { name, description, date, hour, inDiet } = formData;

    await editMeal({
      id: mealId,
      name,
      description,
      inDiet,
      dateAndHour: convertDateAndHourToDate(date, hour),
    });
    navigate("mealDetail", { mealId });
  };

  const fetchMealById = async () => {
    try {
      setIsLoading(true);

      const mealById = await getMealById(mealId);

      if (mealById) {
        const { name, description, dateAndHour, inDiet } = mealById;
        setDefaultValues({
          name,
          description,
          date: dateAndHour,
          hour: dateAndHour,
          inDiet,
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchMealById();
    }, [])
  );

  return isLoading ? (
    <Loading />
  ) : (
    <MealForm onFormSubmit={onSubmit} defaultValues={defaultValues} />
  );
};
