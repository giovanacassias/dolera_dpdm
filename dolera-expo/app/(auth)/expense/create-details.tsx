import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';

export default function home() {


  return (
    <View style={styles.container}>
      <Text>Expense - details</Text>
      <Text>Add details</Text>
      <Link href={'/(auth)/home'}>SAVE</Link>
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