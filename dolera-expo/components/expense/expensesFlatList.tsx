import { ScrollView, View, FlatList } from "react-native";
import { data } from "../../mocks/expenses";
import ExpenseItem from "./expenseItem";
import { categories } from "../../mocks/categories";

export default function ExpensesFlatList() {
  return (
    <View className="bg-almost-white  flex justify-center">
      <FlatList
        contentContainerStyle={{ gap: 12 }}
        showsVerticalScrollIndicator={false}
        data={data}
        keyExtractor={(expense) => expense.id.toString()}
        renderItem={({ item }) => (
          <View className="flex gap-4">
            <ExpenseItem
              title={item.name}
              note={item.note}
              catId={item.categories[0]}
              amount={item.amount}
            />
          </View>
        )}
      />
    </View>
  );
}
