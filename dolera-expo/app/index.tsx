import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function index() {

  const router = useRouter();

  const handleLogin = () => {

/*     if(router.canDismiss()){
      router.dismissAll();
      console.log('true');
    }

    console.log('false');
    router.push("/(auth)/home"); */

    router.replace("/(auth)/home");
  }
    
  return (
    <View className="flex-1 items-center justify-center bg-blue-500">
      <Text className="text-red-500">Entry point: index.tsx</Text>
      <Button title='Log in' onPress={handleLogin}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
