import { Link } from 'expo-router';
import { Text, View } from 'react-native';


export default function home() {

  return (
    <View className="w-full p-10 flex-1 items-center justify-center bg-almost-white">
      <Text>France 2026</Text>
      <Link href={'/(auth)/expense/create-category'}>Add expense</Link>
    </View>
  );
}
