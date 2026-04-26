import { View, Text } from "react-native";
import { colors } from "../../assets/theme/colors";
import { CheckBox } from "@rneui/themed";
import MaterialIcons from "@react-native-vector-icons/material-icons";
import { IconName } from "../../types/Icon";

interface CategoryCheckBoxProps {
  icon: IconName;
  title: string;
  check: boolean;
  onPress: () => void;
}

export default function CategoryCheckBox({
  icon,
  title,
  check,
  onPress,
}: CategoryCheckBoxProps) {
  return (
    <View className="flex-row items-center w-11/12 flex-1 rounded-lg bg-white">
      <CheckBox
        checked={check}
        onPress={onPress}
        containerStyle={{ backgroundColor: "transparent" }}
        checkedColor={colors.darkGreen}
        uncheckedColor={colors.lightGreen}
      />

      <MaterialIcons name={icon} size={30} color={colors.darkGreen} />

      <View>
        <Text
          style={{
            fontWeight: "700",
            fontSize: 12,
            color: colors.darkGreen,
            marginLeft: 10,
          }}
        >
          {title}
        </Text>
      </View>
    </View>
  );
}
