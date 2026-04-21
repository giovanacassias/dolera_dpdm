import { View, Text } from "react-native";
import { useState } from "react";
import { colors } from "../../assets/theme/colors";
import { Icon, CheckBox } from "@rneui/themed";

interface CategoryCheckBoxProps {
  icon: React.ReactNode;
  title: string;
  setCheck: (bol: boolean) => void;
  check: boolean;
}

export default function CategoryCheckBox({
  icon,
  title,
  check,
  setCheck,
}: CategoryCheckBoxProps) {
  return (
    <View className="flex-row items-center w-full rounded-lg bg-white">
      <CheckBox
        className="w-2/12"
        checked={check}
        containerStyle={{
          backgroundColor: "transparent",
        }}
        onPress={() => setCheck(!check)}
        checkedColor={colors.darkGreen}
        uncheckedColor={colors.lightGreen}
      />
      {icon}
      <View className="w-8/12 pl-4">
        <Text
          style={{
            fontWeight: "700",
            fontSize: 12,
            color: `${colors.darkGreen}`
          }}
        >
          {title}
        </Text>
      </View>
    </View>
  );
}
