import React, { useState } from "react";
import { Button } from "../../components/form/Button/Button";
import { CategorySelectButton } from "../../components/form/CategorySelectButton/CategorySelect";
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
import { CategorySelect } from "../CategorySelect/CategorySelect";
import { Modal } from "react-native";

export const Register = () => {
  const [category, setCategory] = useState({key: 'category', name:'categoria'})
  const [transactionType, setTransactionType] = useState("");
  const [categoryModalOpen, setCategoryModalOpen] = useState(false)

  const handleTransactionTypeSelect = (type: "up" | "down") => {
    setTransactionType(type);
  };

  const handleOpenModal = () => {
    setCategoryModalOpen(true)
  }
  
  const handleCloseModal = () => {
    setCategoryModalOpen(false)
  }

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

          <CategorySelectButton title="Categoria"  onPress={handleOpenModal}/>
        </Fields>

        <Button title="Enviar" />
      </Form>

      <Modal visible={categoryModalOpen}>
        <CategorySelect 
          category = {category}
          setCategory = {setCategory}
          closeSelectCategory = {handleCloseModal}
        />
      </Modal>
    </Contaniner>
  );
};
