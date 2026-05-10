import { useRouter } from "expo-router";
import { Text, View, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { useGlobalSearchParams } from "expo-router";
import CrudTitle from "../../../components/titles/crudTitle";
import AddDetails from "../../../components/forms/addDetails";
import CustomButton from "../../../components/customButton";
import { data } from "../../../mocks/expenses";

export default function home() {
  let { categories } = useGlobalSearchParams();

  let parsedCategories = [];

  if (typeof categories === "string") {
    try {
      parsedCategories = JSON.parse(categories);
      console.log(`Typeof "parsedCategories`, typeof parsedCategories);
      console.log(
        `"parsedCategories isArray?`,
        Array.isArray(parsedCategories),
      );
      console.log(`Typeof "parsedCategories[0]`, typeof parsedCategories[0]);
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
    <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={100} className="w-full  bg-almost-white flex-1">
      <ScrollView>
        <View className="w-full pl-12 pr-12 bg-almost-white flex-1">
        <View className="bg-almost-white flex-1">
          <CrudTitle title1="Add the" title2="Details" />
          
          <AddDetails mock={data[0]} />

          <CustomButton.coral onPress={handleBackHome} title="SAVE" />
        </View>
      </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
