import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import  Buttons  from './Components/Buttons';



export default function App() {
  return (
    <View style={styles.container}>
      <Buttons />
      <Buttons />
      <Buttons />
      <Buttons />
      <Buttons />
      <Buttons />
      <Buttons />
      <Buttons />
      <Buttons />
      <Buttons />
      <Buttons />
      <Buttons />
      <Buttons />
      <Buttons />
      <Buttons />
      <Buttons />
      <Buttons />
      <Buttons />
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginVertical: 20,
    width: 450,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  
});

