import React from 'react';
import { View, Text } from 'react-native';

const Display = (props) => {
  return (
    <View style={{ width:'100%', height: '25%', backgroundColor: 'grey',flexDirection: 'column',alignItems: 'flex-end', }}>
      <Text style={{ color: "white", fontSize: 30 }}>{props.value}</ Text>
      <Text style={{fontSize: 40,
        color: "white",
        marginLeft: 'auto',
        }}>{props.resolved}</ Text>
    </View>)
}

export default Display