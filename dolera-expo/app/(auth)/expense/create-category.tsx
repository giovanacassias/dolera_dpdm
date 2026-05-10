import { useRouter } from "expo-router";
import { ScrollView, View } from "react-native";
import ExpenseCategory from "../../../components/expense/expenseCategory";
import MaterialIcons from "@react-native-vector-icons/material-icons";
import { Pressable } from "react-native";
import { useEffect, useState } from "react";
import CrudTitle from "../../../components/titles/crudTitle";

export default function home() {
  const router = useRouter();

  const [selected, setSelected] = useState<number[]>([]);

  useEffect(() => {
    console.log("Categories chosen:", selected);
  }, [selected]);

  return (
    <View className="flex-1 bg-almost-white">
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="flex-1"
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View className="w-full pl-8 pr-8 bg-almost-white flex-1">
          <CrudTitle title1="Choose a" title2="Category" />

          <ExpenseCategory selected={selected} setSelected={setSelected} />

          <View className="flex-1 justify-center bg-almost-white mb-20 mt-10">
            <Pressable
              className="items-center justify-center"
              onPress={() =>
                router.push({
                  pathname: "/(auth)/expense/create-details",
                  params: {
                    categories: JSON.stringify(selected),
                  },
                })
              }
            >
              <MaterialIcons name="east" size={24} />
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
