import React from 'react';
import { Button} from '@ui-kitten/components';

const log= () => {
    console.log("hello") 
}

const Buttons= (props) => {
    return <Button
    onPress={props.onPress ? props.onPress : log}
    color="black"
    
  >{props.value ? props.value :''}</Button>
}

export default Buttons