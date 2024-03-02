import { Home } from "@screens/home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export const AppRoutes = () => {
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
    </Navigator>
  );
};
