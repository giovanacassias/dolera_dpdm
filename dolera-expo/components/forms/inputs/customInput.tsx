import { View } from "react-native";
import { Input } from "@rneui/themed";
import { colors } from "../../../assets/theme/colors";

interface CustomInputProps {
    label: string;
    placeholder: string;
}

export default function CustomInput({ label, placeholder }: CustomInputProps) {
  return (
    <View>
      <Input 
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
            fontFamily: "Outfit_300Light"
        }}
        containerStyle={{
            paddingHorizontal: 0
        }}
      />
    </View>
  );
}
