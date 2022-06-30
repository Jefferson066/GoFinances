import React from 'react'

import { HighligthCard } from '../../components/HighligthCard/HighligthCard';
import { TransactionCard, ITransactionCardProps } from '../../components/TransactionCard/TransactionCard';
import { getBottomSpace } from 'react-native-iphone-x-helper';

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
  Transactions,
  Title,
  TransactionList,
} from './styles';

export interface IDataListProps extends ITransactionCardProps {
  id: string;
}

export const Dashboard = () => {

  const data: IDataListProps[] = [{
    id: '1',
    type: 'positive',
    title: 'Desenvolvimento de site',
    amount: 'R$ 12.000,00',
    category: { name: 'Vendas', icon: 'dollar-sign' },
    date: '13/04/2020',
  },
  {
    id: '2',
    type:  'negative',
    title: 'Hamburgueria Pizzy',
    amount: 'R$ 59,00',
    category: { name: 'Alimentação', icon: 'coffee' },
    date: '10/04/2020',
  },
  {
    id: '3',
    type: 'positive',
    title: 'Desenvolvimento de site',
    amount: 'R$ 12.000,00',
    category: { name: 'Vendas', icon: 'dollar-sign' },
    date: '13/04/2020',
  }
  ]

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

      <Transactions>
        <Title>Listagem</Title>

        <TransactionList
          data={data}
          renderItem={({ item }) => <TransactionCard data={item} />}
          keyExtractor={( item ) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: getBottomSpace() ,
          }}
        />

      </Transactions>

    </Contaniner>

  )
}

