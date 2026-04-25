import { Stack } from "expo-router";
import "./global.css";
import { colors } from "../assets/theme/colors";

export default function _layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="(auth)/home"
        options={{ title: "Homepage", headerShown: false }}
      />
      <Stack.Screen
        name="(auth)/expense/create-category"
        options={{
          title: "",
          headerStyle: {
            backgroundColor: `${colors.almostWhite}`,
          },
          headerShadowVisible: false,
          headerTintColor: `${colors.darkGreen}`,
        }}
      />
      <Stack.Screen
        name="(auth)/expense/create-details"
        options={{
          title: "",
          headerStyle: {
            backgroundColor: `${colors.almostWhite}`,
          },
          headerShadowVisible: false,
          headerTintColor: `${colors.darkGreen}`,
        }}
      />
    </Stack>
  );
}
