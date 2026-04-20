import { Button } from "@rneui/themed";
import { View } from "react-native";
import { colors } from "../../../assets/theme/colors";

interface CustomButtonProps {
  title: string;
  onPress: () => void;
}

export default function ButtonCoral({ title, onPress }: CustomButtonProps) {
  return (
    <View className="w-full">
      <Button
        title={title}
        onPress={onPress}
        buttonStyle={{
          backgroundColor: colors.lightCoral,
          borderRadius: 20,
          height: 44,
        }}
        titleStyle={{
          textTransform: "uppercase",
          fontSize: 12,
          fontWeight: "800",
        }}
      />
    </View>
  );
}
