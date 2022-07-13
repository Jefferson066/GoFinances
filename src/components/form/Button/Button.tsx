import React from "react";
import { TouchableOpacityProps } from 'react-native';

import { Contaniner, Title } from "./styles";

interface Props extends TouchableOpacityProps{
  title: string;
}

export const Button = ({title, ...rest}: Props) => {
  return (
    <Contaniner {...rest}>
      <Title >
        {title}
      </Title>
    </Contaniner>
  );
};
