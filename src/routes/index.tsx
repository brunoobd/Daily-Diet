import { AppRoutes } from "./app.routes";
import { SafeAreaView } from "react-native-safe-area-context";

import { NavigationContainer } from "@react-navigation/native";

export const Routes = () => {
  return (
    <SafeAreaView>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </SafeAreaView>
  );
};
