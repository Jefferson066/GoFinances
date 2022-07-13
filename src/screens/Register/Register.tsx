import React from "react";
import { Button } from "../../components/form/Button/Button";
import { Input } from "../../components/form/Input/Input";

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
        </Fields>

        <Button title="Enviar" />
      </Form>
    </Contaniner>
  );
};
