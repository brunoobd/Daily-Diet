import { MealForm } from "@components/mealForm";
import { useNavigation } from "@react-navigation/native";
import { createMeal } from "@storage/meal/create-meal";
import { FormData } from "src/model";

export const NewMeal = () => {
  const { navigate } = useNavigation();

  const onSubmit = async (formData: FormData) => {
    await createMeal(formData);
    navigate("feedback", { inDiet: formData.inDiet });
  };

  return <MealForm onFormSubmit={onSubmit} />;
};
