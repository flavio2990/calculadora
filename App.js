import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Button from './Components/Buttons';
import Display from './Components/Display';
import React, { useState } from 'react';
import { ApplicationProvider } from '@ui-kitten/components';
import Buttons from './Components/OwnButtons';
import * as eva from '@eva-design/eva';


export default function App() {
  const [displayValue, setDisplayValue] = useState(null);
  const [savedValue, setSavedValue] = useState(null);
  const [operation, setOperation] = useState(null);

  const [resolvedValue, setResolvedValue] = useState(null);

  const onPressValue = (value) => {

    setDisplayValue(displayValue + value)
  }

  const clear = () => {
    setDisplayValue(null)
  }
  const deleteOne = () => {
    const newValue = displayValue.slice(0, -1)
    setDisplayValue(newValue)
  }

  const operate = (op) => {
    setSavedValue(displayValue)
    setDisplayValue(null)
    setOperation(op)
  }
  const calculate = () => {
    switch (operation) {
      case "substraction":
        setResolvedValue(savedValue - displayValue)
        break
      case "multiplication":
        setResolvedValue(savedValue * displayValue)
        break
      case "division":
        setResolvedValue(savedValue / displayValue)
        break
      case "addition":
        setResolvedValue(savedValue + displayValue, '+')
    }
  }

  return (
      <View style={buttonStyles.container}>
        <Display value={savedValue + " " + operation + " " + displayValue} resolved={resolvedValue} />
          <Buttons value='1' onPress={() => onPressValue(1)} />
          <Buttons value='2' onPress={() => onPressValue(2)} />
          <Buttons value='3' onPress={() => onPressValue(3)} />
          <Buttons value='4' onPress={() => onPressValue(4)} />
          <Buttons value='5' onPress={() => onPressValue(5)} />
          <Buttons value='6' onPress={() => onPressValue(6)} />
          <Buttons value='7' onPress={() => onPressValue(7)} />
          <Buttons value='9' onPress={() => onPressValue(9)} />
          <Buttons value='0' onPress={() => onPressValue(0)} />
          <Buttons value='-' onPress={() => operate("substraction")} />
          <Buttons value='8' onPress={() => onPressValue(8)} />
          <Buttons value='+' onPress={() => operate("addition")} />
          <Buttons value='x' onPress={() => operate("multiplication")} />
          <Buttons value='/' onPress={() => operate("division")} />
          <Buttons value='=' onPress={() => calculate()} />
          <Buttons value='Clear' onPress={() => clear()} />
          <Buttons value='Del' onPress={() => deleteOne()} />
          <Buttons value='.' onPress={() => onPressValue(".")} />
        <StatusBar style="auto" />
      </View>
  );
}

const buttonStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: '10%',
    // maxWidth: "25%",
  },
});

