import { Text, View } from "react-native";
import CustomInput from "./inputs/customInput";
import { Expense } from "../../types/Expense";

interface AddDetailsProps {
  mock: Expense;
}

export default function AddDetails({ mock }: AddDetailsProps) {
  console.log("O que chegou foi: ", mock);

  return (
    <View>
      {Object.entries(mock)
        .filter(([key]) => key !== "id" && key !== "categories")
        .map(([key, value]) => (
          <CustomInput key={key} label={key} placeholder={String(value)} />
        ))}
    </View>
  );
}
