import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from './Components/Buttons';
import Display from './Components/Display';
import React, { useState } from 'react';
import { ApplicationProvider } from '@ui-kitten/components';
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
        setResolvedValue(savedValue + displayValue)
    }
  }

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <View style={styles.container}>
        <Display value={displayValue + " " + operation + " " + savedValue} resolved={resolvedValue} />

        <Button value='1' onPress={() => onPressValue(1)} />
        <Button value='2' onPress={() => onPressValue(2)} />
        <Button value='3' onPress={() => onPressValue(3)} />
        <Button value='4' onPress={() => onPressValue(4)} />
        <Button value='5' onPress={() => onPressValue(5)} />
        <Button value='6' onPress={() => onPressValue(6)} />
        <Button value='7' onPress={() => onPressValue(7)} />
        <Button value='8' onPress={() => onPressValue(8)} />
        <Button value='9' onPress={() => onPressValue(9)} />
        <Button value='0' onPress={() => onPressValue(0)} />
        <Button value='-' onPress={() => operate("substraction")} />
        <Button value='+' onPress={() => operate("addition")} />
        <Button value='x' onPress={() => operate("multiplication")} />
        <Button value='/' onPress={() => operate("division")} />
        <Button value='=' onPress={() => calculate()} />
        <Button value='Clear' onPress={() => clear()} />
        <Button value='Delete' onPress={() => deleteOne()} />
        <Button value='.' onPress={() => onPressValue(".")} />

        <StatusBar style="auto" />
      </View>
    </ApplicationProvider >
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

