import React from 'react'
import {
  Contaniner,
  Header,
  UserInfo,
  UserWrapper,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighligthCards,
} from './styles';
import { HighligthCard } from '../../components/HighligthCard/HighligthCard';

export const Dashboard = () => {

  return (
    <Contaniner>

      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{ uri: 'https://avatars.githubusercontent.com/u/72099313?v=4' }}
            />
            <User>
              <UserGreeting>Olá, </UserGreeting>
              <UserName>Jefferson</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>

      <HighligthCards >
        <HighligthCard
          title='Entradas'
          amaunt='R$ 17.400,00'
          lastTransaction='Última entrada dia 13 de abril'
          type='up'
        />
        <HighligthCard
          title='Saídas'
          amaunt='R$ 1.259,00'
          lastTransaction='Última saída dia 03 de abril'
          type='down'
        />
        <HighligthCard
          title='Total'
          amaunt='R$ 16.141,00'
          lastTransaction='01 à 16 de abril'
          type='total'
        />
      </HighligthCards >

    </Contaniner>

  )
}

