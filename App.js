import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Buttons from './Components/Buttons';
import Display from './Components/Display';
import React, { useState } from 'react';

export default function App() {
  const [displayValue, setDisplayValue] = useState('');
  const [savedValue, setSavedValue] = useState('');
  const [operation, setOperation] = useState('');

  const onPressValue = (value) => {

    setDisplayValue(displayValue + value)
  }

  const clear = () => {
    setDisplayValue('')
  }

  const deleteOne = () => {
    const newValue= displayValue.slice(0, -1)
    setDisplayValue(newValue)
  }

  const operate= (op) => {
    setSavedValue(displayValue)
    setDisplayValue("")
    setOperation(op)
  }

  const calculate= () => {
    switch (operation){
      case "substraction": 
        setDisplayValue(savedValue-displayValue)
        break
      case "multiplication": 
        setDisplayValue(savedValue*displayValue)
        break
    }
  }

  return (
    <View style={styles.container}>
      <Display value={displayValue} />

      <Buttons value='1' onPress={() => onPressValue("1")} />
      <Buttons value='2' onPress={() => onPressValue("2")} />
      <Buttons value='3' onPress={() => onPressValue("3")} />
      <Buttons value='4' onPress={() => onPressValue("4")} />
      <Buttons value='5' onPress={() => onPressValue("5")} />
      <Buttons value='6' onPress={() => onPressValue("6")} />
      <Buttons value='7' onPress={() => onPressValue("7")} />
      <Buttons value='8' onPress={() => onPressValue("8")} />
      <Buttons value='9' onPress={() => onPressValue("9")} />
      <Buttons value='0' onPress={() => onPressValue("0")} />
      <Buttons value='-' onPress={() => operate("substraction")} />
      <Buttons value='+' onPress={() => operate("addition")} />
      <Buttons value='x' />
      <Buttons value='/' />
      <Buttons value='=' onPress={() => calculate()} />
      <Buttons value='Clear' onPress={() => clear()} />
      <Buttons value='Delete' onPress={() => deleteOne()} />
      <Buttons value='.' onPress={() => onPressValue(".")} />

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

