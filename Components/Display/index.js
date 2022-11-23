import React from 'react';
import { View, Text } from 'react-native';


const Display = (props) => {
  return (
    <View style={{width: "100%", height: 100,backgroundColor: 'grey',}}>
      <Text style={{ color: "white", fontSize: 30 }}>{props.value}</ Text>
      <Text style={{ color: "white", fontSize: 50, marginLeft: 200 }}>{props.resolved}</ Text>


    </View>)
}

export default Display