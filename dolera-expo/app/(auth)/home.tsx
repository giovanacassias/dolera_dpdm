import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function home() {

  return (
    <View style={styles.container}>
      <Text>France 2026</Text>
      <Link href={'/(auth)/expense/create-category'}>Add expense</Link>
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
