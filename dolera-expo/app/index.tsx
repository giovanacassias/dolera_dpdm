import { useRouter } from "expo-router";
import { Text, View } from "react-native";
import { Input, Image } from "@rneui/themed";
import { colors } from "../assets/theme/colors";
import CustomButton from "../components/customButton";
import { ScrollView } from "react-native";

export default function index() {
  const router = useRouter();

  const handleLogin = () => {
    router.replace("/(auth)/home");
  };

  return (
    <View className="p-6 flex-1 items-center justify-center bg-almost-white">
      <Text className="text-dark-green font-semibold text-base">
        Welcome to
      </Text>

      <View className="flex w-full items-center mb-20">
        <Image
          source={require("../assets/images/dolera-logo-4.png")}
          style={{ width: 200, height: 75 }}
          resizeMode="center"
        />
      </View>

      <Input
        placeholder="youremail@gmail.com"
        placeholderTextColor={colors.darkGreen}
        inputStyle={{
          color: colors.darkGreen,
          fontSize: 14,
        }}
      ></Input>

      <Input
        placeholder="********"
        placeholderTextColor={colors.darkGreen}
        inputStyle={{
          color: colors.darkGreen,
          fontSize: 14,
        }}
      ></Input>

      <CustomButton>
        <CustomButton.coral title="Login" onPress={handleLogin} />
      </CustomButton>
    </View>
  );
}
