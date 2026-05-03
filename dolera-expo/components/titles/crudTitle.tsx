import { Text } from "@rneui/themed";
import { View } from "react-native";
import { colors } from "../../assets/theme/colors";

interface CrudTitleProps {
    title1: string;
    title2: string;
}

export default function CrudTitle({ title1, title2 }: CrudTitleProps) {
  return (
    <View>
      <Text
        style={{
          fontSize: 45,
          fontFamily: "Outfit_800ExtraBold",
          color: `${colors.darkGreen}`,
          lineHeight: 35,
          marginTop: 20,
        }}
      >
        {title1}
      </Text>
      <Text
        style={{
          fontSize: 45,
          fontFamily: "Outfit_800ExtraBold",
          marginBottom: 20,
          color: `${colors.coral}`,
          lineHeight: 55,
        }}
      >
        {title2}
      </Text>
    </View>
  );
}
