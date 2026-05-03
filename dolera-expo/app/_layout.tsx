import { Stack } from "expo-router";
import "./global.css";
import { colors } from "../assets/theme/colors";
import {
  useFonts,
  Outfit_100Thin,
  Outfit_200ExtraLight,
  Outfit_300Light,
  Outfit_400Regular,
  Outfit_500Medium,
  Outfit_600SemiBold,
  Outfit_700Bold,
  Outfit_800ExtraBold,
  Outfit_900Black,
} from "@expo-google-fonts/outfit";

export default function _layout() {
  const [fontsLoaded] = useFonts({
    Outfit_100Thin,
    Outfit_200ExtraLight,
    Outfit_300Light,
    Outfit_400Regular,
    Outfit_500Medium,
    Outfit_600SemiBold,
    Outfit_700Bold,
    Outfit_800ExtraBold,
    Outfit_900Black,
  });

  if (!fontsLoaded) return null;

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
