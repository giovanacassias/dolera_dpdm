import { View, Text } from "react-native";
import { colors } from "../../assets/theme/colors";
import { MaterialIcons } from "@expo/vector-icons";

interface ExpenseItemProps {
  icon: keyof typeof MaterialIcons.glyphMap;
  title: string;
  note?: string;
  amount: string;
}

export default function ExpenseItem({
  icon,
  title,
  note,
  amount,
}: ExpenseItemProps) {
  return (
    <View className="w-full">
      <View className="flex-row p-4  w-full rounded-lg bg-white">
        <View className="h-full w-2/12 flex-row justify-center items-center">
          <MaterialIcons name={icon} size={30} color={colors.darkGreen} />
        </View>

        <View className="h-full w-6/12 flex-col justify-start items-start">
          <Text
            style={{
              fontFamily: "Outfit_600SemiBold",
              fontSize: 14,
              color: colors.darkGreen,
              marginLeft: 10,
              width: "100%",
            }}
          >
            {title}
          </Text>
          <Text
            style={{
              fontFamily: "Outfit_300Light",
              fontSize: 10,
              marginLeft: 10,
              width: "100%",
              color: colors.darkGreen,
            }}
          >
            {note}
          </Text>
        </View>

        <View className="h-full w-4/12 flex-row justify-center items-center">
          <Text
            style={{
              fontFamily: "Outfit_600SemiBold",
              fontSize: 14,
              color: colors.darkGreen,
              marginLeft: 10,
            }}
          >
            {amount}
          </Text>
        </View>
      </View>
    </View>
  );
}
