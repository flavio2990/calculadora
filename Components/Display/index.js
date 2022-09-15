import React from 'react';
import { View, Text } from 'react-native';


const Display = (props) => {
  return (<View style={{
    width: "100%", height: 80,
    backgroundColor: 'grey',
  }}><Text style={{ color: "red" }}>{props.value}</ Text></View>)
}

export default Display