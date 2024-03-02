import theme from "src/theme";

import { Routes } from "src/routes";

import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <StatusBar style={"dark"} backgroundColor={"transparent"} translucent />
        <SafeAreaView
          style={{ flex: 1, backgroundColor: theme.COLORS.GRAY_100 }}
        >
          <Routes />
        </SafeAreaView>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
