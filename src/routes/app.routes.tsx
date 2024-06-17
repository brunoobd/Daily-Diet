import { Home } from "@screens/home";
import { Statistics } from "@screens/statistics";
import { NewMeal } from "@screens/newMeal";
import { Feedback } from "@screens/feedback";
import { MealDetail } from "@screens/mealDetail";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { EditMeal } from "@screens/editMeal";

export const AppRoutes = () => {
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="statistics" component={Statistics} />
      <Screen name="newMeal" component={NewMeal} />
      <Screen name="feedback" component={Feedback} />
      <Screen name="mealDetail" component={MealDetail} />
      <Screen name="editMeal" component={EditMeal} />
    </Navigator>
  );
};
