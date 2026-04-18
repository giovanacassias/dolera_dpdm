import { useRouter } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';

export default function home() {

  const router = useRouter();

  const handleBackHome = () => {
      
    if(router.canDismiss()){
      router.dismissAll();
      console.log('dismissed');
    }
    router.push('/(auth)/home')
  }

  return (
    <View style={styles.container}>
      <Text>Expense - details</Text>
      <Text>Add details</Text>
      <Button title='SAVE' onPress={handleBackHome}/>
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