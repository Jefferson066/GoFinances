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

interface HighligthCardProps {
  title: string;
  amaunt: string;
  lastTransaction: string;
  type: 'up' | 'down' | 'total';
}

const icons = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
  total: 'dollar-sign',
}

export const HighligthCard = ({ title, amaunt, lastTransaction, type }: HighligthCardProps) => {

  return (
    <Container type={type}>
      <Header>
        <Title type={type}>
          {title}
        </Title>
        <Icon name={icons[type]} type={type} />
      </Header>

      <Footer>
        <Amount type={type}>
          {amaunt}
        </Amount>
        <LastTransaction type={type}>
          {lastTransaction}
        </LastTransaction>
      </Footer>

    </Container>
  )
}