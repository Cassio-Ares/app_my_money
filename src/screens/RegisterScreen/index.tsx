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
import { Modal } from "react-native";
import { SelectModal } from "../SelectModal";


type TypeTransformer = "up" | "down";

export function RegisterScreen() {
  const [selectType, setSelectType] = useState<TypeTransformer>("up")
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
  const [category, setCategory] = useState({
    key: "category",
    name: "Selecione a categoria"
  })
  function handlePress(type: TypeTransformer){
   setSelectType(type)
  }

  function handleOpenModal(){
    setIsOpenModal(true)
  }
  
  function handleCloseModal(){
    setIsOpenModal(false)
  }



  return (
    <Container>
      <Header isHome={false} type={selectType} screenName="Cadastro de Transações" />
      <Content>
        <FormContainer>
          <Title>Tipo de Transação</Title>
          <ContainerButton>
            <SmallButton title="Entrada" type="up" isSelected={selectType === "up"} onPress={() => handlePress("up")}/>
            <SmallButton title="Saida" type="down" isSelected={selectType === "down"}  onPress={() => handlePress("down")}/>
          </ContainerButton>
          <Title>Dados da Transação</Title>
          <Input/>

          {selectType === "down" && <CategorySelectButton title={category.name} onPress={handleOpenModal} />}
        </FormContainer>
        <ContentButton>
          <Button type={selectType}>
            <ButtonTitle>Confirmar</ButtonTitle>
          </Button>
        </ContentButton>
      </Content>
      <Modal visible={isOpenModal}>
        <SelectModal setCategory={setCategory} close={handleCloseModal}/>
      </Modal>
    </Container>
  );
}
