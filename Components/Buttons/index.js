import React from 'react';
import {Button} from 'react-native';

const log= () => {
    console.log("hello") 
}

const Buttons= (props) => {
    return <Button
    onPress={props.onPress ? props.onPress : log}
    title= {props.value ? props.value : "nothing"}
    color="black"
    
  />
}

export default Buttons