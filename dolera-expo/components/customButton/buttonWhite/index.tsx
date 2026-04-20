import { Button } from "@rneui/themed";
import { View } from "react-native";
import { colors } from "../../../assets/theme/colors";

interface CustomButtonProps {
  title: string;
  onPress: () => void;
}

export default function ButtonWhite({ title, onPress }: CustomButtonProps) {
  return (
    <View className="w-full">
      <Button
        title={title}
        onPress={onPress}
        buttonStyle={{
          backgroundColor: colors.almostWhite,
          borderRadius: 20,
          height: 44,
        }}
        titleStyle={{
          textTransform: "capitalize",
          fontSize: 12,
          fontWeight: "800",
          color: colors.darkGreen,
        }}
      />
    </View>
  );
}
