import { View } from "react-native";
import CategoryCheckBox from "./categoryCheckBox";
import { IconName } from "../../types/icons";

type Category = {
  id: number;
  name: string;
  icon: IconName;
};

const categories: Category[] = [
  { id: 1, name: "Accommodation", icon: "cottage" },
  { id: 2, name: "Transportation", icon: "connecting-airports" },
  { id: 3, name: "Shopping", icon: "shopping-bag" },
  { id: 4, name: "Food", icon: "dinner-dining" },
  { id: 5, name: "Sightseeing", icon: "landscape" },
  { id: 6, name: "Fees", icon: "attach-money" },
  { id: 7, name: "Others", icon: "wallet" },
];

interface ExpenseCategoryProps {
  selected: number[];
  setSelected: React.Dispatch<React.SetStateAction<number[]>>;
}

export default function ExpenseCategory({
  selected,
  setSelected,
}: ExpenseCategoryProps) {
  const toggleCategory = (id: number) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <View className="bg-white flex-col items-center justify-evenly h-[420px] rounded-lg">
      {categories.map((cat) => (
        <CategoryCheckBox
          key={cat.id}
          title={cat.name}
          check={selected.includes(cat.id)}
          onPress={() => toggleCategory(cat.id)}
          icon={cat.icon}
        />
      ))}
    </View>
  );
}
