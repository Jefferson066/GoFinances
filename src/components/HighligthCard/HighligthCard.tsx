import React from "react";

import { 
  Container,
  Header,
  Title,
  Icon,
  Footer,
  Amount,
  LastTransaction,
 } from './styles';

export const HighligthCard = () => {


  return (
    <Container>
      <Header>
        <Title>Entrada</Title>
        <Icon name="arrow-up-circle"/>
      </Header>

      <Footer>
        <Amount>R$17.000,00</Amount>
        <LastTransaction>Úiltima entrada 13 de abril</LastTransaction>
      </Footer>

    </Container>
  )
}