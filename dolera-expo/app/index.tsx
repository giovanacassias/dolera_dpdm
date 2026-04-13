import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function index() {

  const router = useRouter();

  const handleLogin = () => {
    router.push("/(auth)/home");
  }
    
  return (
    <View style={styles.container}>
      <Text>Entry point: index.tsx</Text>
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
