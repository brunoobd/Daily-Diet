import { StatusBar } from "expo-status-bar";
import theme from "src/theme";
import { ThemeProvider } from "styled-components/native";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style={"dark"} backgroundColor={"transparent"} translucent />
    </ThemeProvider>
  );
}
