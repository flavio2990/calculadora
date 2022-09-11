import React from 'react';
import {Button} from 'react-native';

const log= () => {
    console.log("hello") 
}

const Buttons= () => {
    return <Button
    onPress={log}
    title="Numbers"
    color="blue"
  />
}

export default Buttons