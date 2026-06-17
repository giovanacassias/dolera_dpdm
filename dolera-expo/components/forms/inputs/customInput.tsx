import { View, Text } from "react-native";
import { Input } from "@rneui/themed";
import { colors } from "../../../assets/theme/colors";
import { ExpenseForm } from "../../../types/ExpenseForm";

interface CustomInputProps {
  label: string;
  placeholder: string;
  prop: keyof ExpenseForm;
  expenseForm: ExpenseForm;
  setExpenseForm: React.Dispatch<React.SetStateAction<ExpenseForm>>;
  errors: Partial<Record<keyof ExpenseForm, string>>;
}

export default function CustomInput({
  label,
  placeholder,
  prop,
  expenseForm,
  setExpenseForm,
  errors,
}: CustomInputProps) {
  return (
    <View>
      <Input
        value={expenseForm[prop]}
        onChangeText={(val) =>
          setExpenseForm((prev) => ({
            ...prev,
            [prop]: val,
          }))
        }
        placeholder={placeholder}
        label={label}
        labelStyle={{
          color: colors.darkGreen,
          marginBottom: 5,
          fontSize: 10,
          textTransform: "capitalize",
        }}
        inputContainerStyle={{
          backgroundColor: "white",
          borderRadius: 5,
          borderColor: colors.lightGray,
          borderWidth: 1,
          paddingLeft: 10,
        }}
        inputStyle={{
          fontSize: 12,
          color: colors.darkGreen,
          fontFamily: "Outfit_300Light",
        }}
        containerStyle={{
          paddingHorizontal: 0,
          height: 70,
          marginBottom: 5,
        }}
      />
      {errors[prop] && <Text style={{ color: "red", fontSize: 12, marginBottom: 30}}>{errors[prop]}</Text>}
    </View>
  );
}
