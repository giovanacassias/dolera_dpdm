import { useRouter } from "expo-router";
import { View } from "react-native";
import ExpenseCategory from "../../../components/expense/expenseCategory";
import { Text } from "@rneui/themed";
import { colors } from "../../../assets/theme/colors";
import MaterialIcons from "@react-native-vector-icons/material-icons";
import { Pressable } from "react-native";
import { useEffect, useState } from "react";

export default function home() {
  const router = useRouter();

  const [selected, setSelected] = useState<number[]>([]);

  useEffect(() => {
    console.log("Categories chosen:", selected);
  }, [selected]);

  return (
    <View className="w-full pl-12 pr-12 flex-1 bg-almost-white">
      <View>
        <Text
          style={{
            fontSize: 45,
            fontWeight: "900",
            color: `${colors.darkGreen}`,
            lineHeight: 35,
            marginTop: 20,
          }}
        >
          Choose a
        </Text>
        <Text
          style={{
            fontSize: 45,
            fontWeight: "900",
            marginBottom: 35,
            color: `${colors.coral}`,
            lineHeight: 50,
          }}
        >
          category
        </Text>
      </View>

      <ExpenseCategory selected={selected} setSelected={setSelected} />

      <View className="flex-1 justify-center mb-10 mt-10">
        <Pressable
          className="items-center justify-center"
          onPress={() => router.push("/(auth)/expense/create-details")}
        >
          <MaterialIcons name="east" size={24} />
        </Pressable>
      </View>
    </View>
  );
}
