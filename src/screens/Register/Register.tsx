import React, { useState } from "react";
import { Button } from "../../components/form/Button/Button";
import { Input } from "../../components/form/Input/Input";
import { TransactionTypeButton } from "../../components/form/TransactionTypeButton/TransactionTypeButton";

import {
  Contaniner,
  Header,
  Title,
  Form,
  Fields,
  TransactionsTypes,
} from "./styles";

export const Register = () => {
  const [transactionType, setTransactionType] = useState("");

  const handleTransactionTypeSelect = (type: "up" | "down") => {
    setTransactionType(type);
  };

  return (
    <Contaniner>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <Input placeholder="Nome" />
          <Input placeholder="Preço" />
          <TransactionsTypes>
            <TransactionTypeButton
              title="Entrada"
              type="up"
              onPress={() => handleTransactionTypeSelect("up")}
              isActive={transactionType === "up"}
            />
            <TransactionTypeButton
              title="Saída"
              type="down"
              onPress={() => handleTransactionTypeSelect("down")}
              isActive={transactionType === "down"}
            />
          </TransactionsTypes>
        </Fields>

        <Button title="Enviar" />
      </Form>
    </Contaniner>
  );
};
