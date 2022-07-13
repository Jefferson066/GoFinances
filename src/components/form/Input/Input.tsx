import React from 'react'
import { TextInputProps } from 'react-native';

import {
  Contaniner,
} from './styles';

type Props = TextInputProps;

export const Input = ({...rest}: Props) => {


  return (
    <Contaniner {...rest}>
      
    </Contaniner>
  )
}

