import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function home() {


  return (
    <View style={styles.container}>
      <Text>Expense - category</Text>
      <Text>Choose category</Text>
      <Link href={'/(auth)/expense/create-details'}>NEXT</Link>
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