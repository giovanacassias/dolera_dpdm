import { View, Text} from "react-native";
import { Input, Image } from "@rneui/themed";
import ScreenTitle from "../titles/screenTitle";
import MaterialIcons from "@react-native-vector-icons/material-icons";
import { colors } from "../../assets/theme/colors";

export default function MainHeader() {
  return (
    <View className="flex-1 justify-items-start w-full bg-almost-white">
      <Image
        source={require("../../assets/images/dolera-small-logo.png")}
        style={{ width: 75, height: 30 }}
        resizeMode="center"
      />
      <ScreenTitle title="France 2026" />

      <View className="flex-row gap-2 mt-3 items-center">
        <MaterialIcons name="info-outline" size={22} color={colors.darkGreen}/>
        <Text className="font-medium text-base">Caio's current trip</Text>
      </View>
    </View>
  );
}
