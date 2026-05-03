import { View, Text } from "react-native";
import { colors } from "../../assets/theme/colors";

interface ScreenTitleProps {
  title: string;
}

export default function ScreenTitle({ title }: ScreenTitleProps) {
  return (
    <View>
      <Text className="font-outfit-extrabold"
        style={{
          fontSize: 45,
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
