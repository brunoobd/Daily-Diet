import theme from "src/theme";

import { Routes } from "src/routes";

import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {
  NunitoSans_400Regular,
  NunitoSans_700Bold,
  useFonts,
} from "@expo-google-fonts/nunito-sans";
import { ActivityIndicator } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <StatusBar style={"dark"} backgroundColor={"transparent"} translucent />
        {fontsLoaded ? <Routes /> : <ActivityIndicator />}
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
