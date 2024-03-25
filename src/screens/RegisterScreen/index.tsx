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
import { Alert, Modal, TouchableWithoutFeedback } from "react-native";
import { SelectModal } from "../SelectModal";
import {  FieldValues, useForm } from "react-hook-form";
import { Keyboard } from "react-native";
import { api } from "../../server/api";
import { format } from "date-fns";

type TypeTransactions = "up" | "down";

type DataType ={
  name: string,
  value: number,
  type: TypeTransactions,
  category?: string,
  date: string
}

export function RegisterScreen() {
  const [selectType, setSelectType] = useState<TypeTransactions>("up");
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [category, setCategory] = useState({
    key: "category",
    name: "Selecione a categoria",
  });

  const { control, handleSubmit, reset } = useForm();

  async function postTransaction(data: DataType){
    try{
       await api.post("/transactions", data)
    }catch(error){
      Alert.alert("Erro no servidor tente mais tarde")
    }
  }

  function handlePress(type: TypeTransactions) {
    setSelectType(type);
  }

  function handleOpenModal() {
    setIsOpenModal(true);
  }

  function handleCloseModal() {
    setIsOpenModal(false);
  }

  function clear(){
    setSelectType('up');
    setCategory({  key: "category", name: "Selecione a categoria",});
    reset({
      name:"",
      value:"",
    });
  }


  function handleRegister(form: FieldValues) {

    const currentDate = format(new Date(), 'dd/MM/yy' )

    const data = {
      name: form.name,
      value: form.value,
      type: selectType,
      category: category.key,
      date: currentDate,
    };

    if(category.key !== "category"){
      data.category = category.key;
    }

    postTransaction(data);
    clear()
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
              name="value"
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
