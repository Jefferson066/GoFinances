import React from 'react'
import { Feather } from '@expo/vector-icons';
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
        <HighligthCard />
        <HighligthCard />
        <HighligthCard />
      </HighligthCards >

    </Contaniner>

  )
}

