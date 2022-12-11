import React from 'react';
import { Text, View, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';

const width = Dimensions.get('window').width


const Buttons = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress ? props.onPress : null}>
            <View style={{
                color: 'red',
                fontSize: 20,
                textAlign: 'center',
                borderColor: 'white',
                backgroundColor: 'blue',
                height: 90,
                width: 90,
                borderRadius:50,
                borderWidth: 2,
                
                }}>
                <Text style={{
                    marginTop:25,
                    marginEnd:25,
                    marginLeft:25,
                    marginRight:25,
                    fontSize: 25,

                    color: 'white'

                }}>
                    {props.value ? props.value : ''}</Text>
            </View>


        </TouchableOpacity>
    )
};



export default Buttons;