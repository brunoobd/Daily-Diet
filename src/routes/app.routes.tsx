import { Home } from "@screens/home";
import { Statistics } from "@screens/statistics";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export const AppRoutes = () => {
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="statistics" component={Statistics} />
    </Navigator>
  );
};
