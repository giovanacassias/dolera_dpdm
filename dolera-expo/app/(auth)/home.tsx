import { useRouter } from "expo-router";
import { View } from "react-native";
import MainHeader from "../../components/header/mainHeader";
import ExpenseItem from "../../components/expense/expenseItem";
import { Category } from "../../types/Category";
import CustomButton from "../../components/customButton";
import { ScrollView } from "react-native";
import ExpensesFlatList from "../../components/expense/expensesFlatList";
import Budget from "../../components/header/budget";

const categories: Category[] = [
  { id: 1, name: "Accommodation", icon: "cottage" },
  { id: 2, name: "Transportation", icon: "connecting-airports" },
  { id: 3, name: "Shopping", icon: "shopping-bag" },
  { id: 4, name: "Food", icon: "dinner-dining" },
  { id: 5, name: "Sightseeing", icon: "landscape" },
  { id: 6, name: "Fees", icon: "attach-money" },
  { id: 7, name: "Others", icon: "wallet" },
];

export default function home() {
  const router = useRouter();

  const handleMoveToNextPage = () => {
    router.push("/(auth)/expense/create-category");
  };

  return (
    <View className="p-8 pt-16 pb-16 flex-1 items-center bg-almost-white">
      <View className="h-1/6 w-full">
        <MainHeader />
      </View>

      <Budget />

      <View className="bg-almost-white h-3/6 flex justify-center">
        <ExpensesFlatList />
      </View>

      <View className="w-full h-1/6 flex justify-center">
        <CustomButton.coral
          title="Add expense"
          onPress={handleMoveToNextPage}
        />
      </View>
    </View>
  );
}
