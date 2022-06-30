import React from "react";

import {
  Contaniner,
  Title,
  Amount,
  Footer,
  Category,
  Icon,
  CategoryName,
  Date,
} from './styles';

interface ICategory {
  name: string;
  icon: string;
}

export interface ITransactionCardProps {
  type: 'positive' | 'negative';
  title: string;
  amount: string;
  category: ICategory;
  date: string;
}

export interface ITransactionCard {
  data: ITransactionCardProps;
}

export const TransactionCard = ({ data }: ITransactionCard) => {

  return (
    <Contaniner>
      <Title>
        {data.title}
      </Title>

      <Amount type={data.type}>
        {data.type === 'positive' ? data.amount : `- ${data.amount}`}
      </Amount>

      <Footer>
        <Category>
          <Icon name={data.category.icon} />
          <CategoryName>
            {data.category.name}
          </CategoryName>
        </Category>

        <Date>
          {data.date}
        </Date>
      </Footer>
    </Contaniner>
  )
}