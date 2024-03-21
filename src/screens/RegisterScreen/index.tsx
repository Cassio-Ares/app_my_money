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

type TypeTransformer = "up" | "down";

export function RegisterScreen() {

  const [selectType, setSelectType] = useState<TypeTransformer>("up")
  
  function handlePress(type: TypeTransformer){
   setSelectType(type)
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
        </FormContainer>
        <ContentButton>
          <Button type={selectType}>
            <ButtonTitle>Confirmar</ButtonTitle>
          </Button>
        </ContentButton>
      </Content>
    </Container>
  );
}
