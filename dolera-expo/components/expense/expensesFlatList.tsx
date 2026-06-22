import { ScrollView, View, FlatList } from "react-native";
import { data } from "../../mocks/expenses";
import ExpenseItem from "./expenseItem";
import { categories } from "../../mocks/categories";
import ExpenseRepository, {
  Expense,
} from "../../src/database/ExpenseRepository";
import { useEffect, useState } from "react";

export default function ExpensesFlatList() {
  const repository = new ExpenseRepository();

  const findIcon = (index: number) => {
    return categories[index - 1].icon;
  };

  const [expenses, setExpenses] = useState<Expense[]>([]);

  useEffect(() => {
    const init = async () => {
      /* await repository.delete(); */

      const data = await repository.all();
      console.log("Expenses on DB: ", data);

      setExpenses(data);
    };

    init();
  }, []);

  return (
    <View className="bg-almost-white  flex justify-center">
      <FlatList
        contentContainerStyle={{ gap: 12 }}
        showsVerticalScrollIndicator={false}
        data={expenses}
        keyExtractor={(expense) => String(expense.id)}
        renderItem={({ item }) => (
          <View className="flex gap-4">
            <ExpenseItem
              title={item.name}
              note={item.note}
              icon={findIcon(item.category_id)}
              amount={item.amount.toString()}
            />
          </View>
        )}
      />
    </View>
  );
}
