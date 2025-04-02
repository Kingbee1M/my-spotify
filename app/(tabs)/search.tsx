import { StyleSheet, Text, View, StatusBar, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function TabTwoScreen() {
  return (
    <SafeAreaView style={styles.veiwContainer}>
      <Text style={styles.textContainer}>Search page 1</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  veiwContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121212"
},
textContainer: {
  color: "white"
}
});
