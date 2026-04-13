import { Stack } from "expo-router";

export default function _layout() {
    return(
        <Stack>
            <Stack.Screen name="index" options={{ title: "Login"}} />
            <Stack.Screen name="(auth)/home" options={{ title: "Homepage", headerShown: false}} />
            <Stack.Screen name="(auth)/expense/create-category" options={{ title: "Category"}} />
            <Stack.Screen name="(auth)/expense/create-details" options={{ title: "Details"}} />
        </Stack>
    )
}