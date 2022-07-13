import React from "react";
import { Button } from "../../components/form/Button/Button";
import { Input } from "../../components/form/Input/Input";
import { TransactionTypeButton } from "../../components/form/TransactionTypeButton/TransactionTypeButton";

import { Contaniner, Header, Title, Form, Fields } from "./styles";

export const Register = () => {
  return (
    <Contaniner>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <Input placeholder="Nome" />
          <Input placeholder="Preço" />
          <TransactionTypeButton title="Entrada" type="up"/>
          <TransactionTypeButton title="Saída" type="down"/>
        </Fields>

        <Button title="Enviar" />
      </Form>
    </Contaniner>
  );
};
