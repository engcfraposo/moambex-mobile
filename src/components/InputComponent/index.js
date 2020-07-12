import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons'
import { TouchableWithoutFeedback } from 'react-native'
import { Button, Label } from './styles';

export default function InputComponent({ onPress, focused }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
        <Button>
            <FontAwesome5 
                name="pallet" 
                size={30} 
                color="#fff" />
            <Label focused={focused} >Inserir</Label>
        </Button>
    </TouchableWithoutFeedback>
  );
}
