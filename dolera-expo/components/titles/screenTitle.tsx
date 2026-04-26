import { View } from "react-native";
import { Text } from "@rneui/themed";
import { colors } from "../../assets/theme/colors";

interface ScreenTitleProps {
  title: string;
}

export default function ScreenTitle({ title }: ScreenTitleProps) {
  return (
    <View>
      <Text
        style={{
          fontSize: 45,
          fontWeight: "900",
          color: `${colors.darkGreen}`,
          lineHeight: 35,
          marginTop: 20,
        }}
      >
        {title}
      </Text>
    </View>
  );
}
