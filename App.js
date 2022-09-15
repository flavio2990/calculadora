import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import  Buttons  from './Components/Buttons';
import Display from './Components/Display';
import React,{useState} from 'react';

export default function App() {
  const [calculation, setCalculation] = useState ('');
  const onPressValue= (value) => {
    setCalculation(calculation + value)
    
}
  return (
    <View style={styles.container}>
      <Display value={calculation} />
      


      <Buttons value= '1' onPress={() => onPressValue("1")} />
      <Buttons value= '2' onPress={() => onPressValue("2")} />
      <Buttons value= '3' onPress={() => onPressValue("3")} />
      <Buttons value= '4' onPress={() => onPressValue("4")} />
      <Buttons value= '5' onPress={() => onPressValue("5")} />
      <Buttons value= '6' onPress={() => onPressValue("6")} />
      <Buttons value= '7' onPress={() => onPressValue("7")} />
      <Buttons value= '8' onPress={() => onPressValue("8")} />
      <Buttons value= '9' onPress={() => onPressValue("9")} />
      <Buttons value= '0' onPress={() => onPressValue("0")} />
      <Buttons value= '-'/>
      <Buttons value= '+'/>
      <Buttons value= 'x'/>
      <Buttons value= '/'/>
      <Buttons value= '='/>
      <Buttons value= 'C'/>
      <Buttons value= 'D'/>
      <Buttons value= '.' onPress={() => onPressValue(".")} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 16,
    marginVertical: 20,
    width: 450,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 90,
    
  },
  
});

