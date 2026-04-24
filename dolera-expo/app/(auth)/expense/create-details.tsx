import { useRouter } from "expo-router";
import { Text, View } from "react-native";
import { Button } from "react-native";
import { useGlobalSearchParams } from "expo-router";

export default function home() {
  let { categories } = useGlobalSearchParams();

  let parsedCategories = [];

  if (typeof categories === "string") {
    try {
      parsedCategories = JSON.parse(categories);
      console.log(`Typeof "parsedCategories`, typeof(parsedCategories));
      console.log(`"parsedCategories isArray?`, Array.isArray(parsedCategories));
      console.log(`Typeof "parsedCategories[0]`, typeof(parsedCategories[0]));
      console.log(`parsedCategories: ${parsedCategories}`);
    } catch (e) {
      console.log("Erro!");
    }
  }

  const router = useRouter();

  const handleBackHome = () => {
    if (router.canDismiss()) {
      router.dismissAll();
      console.log("dismissed");
    }
    router.push("/(auth)/home");
  };

  return (
    <View>
      <Text>Expense - details</Text>
      <Text>Add details</Text>
      <Button title="SAVE" onPress={handleBackHome} />
    </View>
  );
}
