import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import  Buttons  from './Components/Buttons';



export default function App() {
  return (
    <View style={styles.container}>
      <Buttons value= '1' />
      <Buttons value= '2' />
      <Buttons value= '3'/>
      <Buttons value= '4'/>
      <Buttons value= '5'/>
      <Buttons value= '6'/>
      <Buttons value= '7'/>
      <Buttons value= '8'/>
      <Buttons value= '9'/>
      <Buttons value= '0'/>
      <Buttons value= '-'/>
      <Buttons value= '+'/>
      <Buttons value= 'x'/>
      <Buttons value= '/'/>
      <Buttons value= '='/>
      <Buttons value= 'C'/>
      <Buttons value= 'D'/>
      <Buttons value= '.'/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 16,
    marginVertical: 20,
    width: 450,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 90,
    paddingHorizontal: "35%",
    
  },
  
});

