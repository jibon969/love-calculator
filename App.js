import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoveCalculator from './src/index';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
        <LoveCalculator/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});
