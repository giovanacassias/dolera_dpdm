import { View, Text } from "react-native";

export default function Budget() {
  return (
    <View className="h-1/6 w-full flex-row items-center mt-3 mb-3">
      <View className="w-full flex-col justify-center items-center p-2 ">
        <Text className="text-coral text-sm font-outfit-medium">Total</Text>
        <Text className="text-dark-coral font-outfit-bold text-4xl">
          $4,521.30
        </Text>
        <Text className="text-coral text-sm font-outfit-light">
          4,521.30 / 10,000
        </Text>
      </View>
    </View>
  );
}
