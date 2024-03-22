import React, { useState } from "react";
import {
  Container,
  Content,
  FormContainer,
  Title,
  ContainerButton,
  ContentButton,
  Button,
  ButtonTitle,
} from "./style";
import { Header } from "../../components/Header";
import { SmallButton } from "../../components/SmallButton";
import { Input } from "../../components/Input";
import { CategorySelectButton } from "../../components/CategorySelectButton";
import { Modal, TouchableWithoutFeedback } from "react-native";
import { SelectModal } from "../SelectModal";
import {  FieldValues, useForm } from "react-hook-form";
import { Keyboard } from "react-native";

type TypeTransformer = "up" | "down";

export function RegisterScreen() {
  const [selectType, setSelectType] = useState<TypeTransformer>("up");
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [category, setCategory] = useState({
    key: "category",
    name: "Selecione a categoria",
  });

  const { control, handleSubmit } = useForm();

  function handlePress(type: TypeTransformer) {
    setSelectType(type);
  }

  function handleOpenModal() {
    setIsOpenModal(true);
  }

  function handleCloseModal() {
    setIsOpenModal(false);
  }

  function handleRegister(form: FieldValues) {
    const data = {
      name: form.name,
      amount: form.amount,
      transactionType: selectType,
      category: category.key,
    };

    console.log("data", data);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header
          isHome={false}
          type={selectType}
          screenName="Cadastro de Transações"
        />
        <Content>
          <FormContainer>
            <Title>Tipo de Transação</Title>
            <ContainerButton>
              <SmallButton
                title="Entrada"
                type="up"
                isSelected={selectType === "up"}
                onPress={() => handlePress("up")}
              />
              <SmallButton
                title="Saida"
                type="down"
                isSelected={selectType === "down"}
                onPress={() => handlePress("down")}
              />
            </ContainerButton>
            <Title>Dados da Transação</Title>
            <Input
              name="name"
              control={control}
              placeholder="Insira o nome"
              autoCapitalize="sentences"
              autoCorrect={false}
            />
            <Input
              name="amount"
              control={control}
              placeholder="Insira o valor"
              keyboardType="numeric"
            />
            {selectType === "down" && (
              <CategorySelectButton
                title={category.name}
                onPress={handleOpenModal}
              />
            )}
          </FormContainer>
          <ContentButton>
            <Button type={selectType} onPress={handleSubmit(handleRegister)}>
              <ButtonTitle>Confirmar</ButtonTitle>
            </Button>
          </ContentButton>
        </Content>
        <Modal visible={isOpenModal}>
          <SelectModal setCategory={setCategory} close={handleCloseModal} />
        </Modal>
      </Container>
    </TouchableWithoutFeedback>
  );
}
