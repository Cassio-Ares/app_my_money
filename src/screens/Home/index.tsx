import React from "react";
import { Container, ContainerBanners, Content, ContainerList } from "./style";
import { Total } from "../../components/Total";
import { Banner } from "../../components/Banner";
import { Header } from "../../components/Header";
import { TransactionCard, TransactionCardsProps } from "../../components/TransactionCard";
import { FlatList } from "react-native";

export type ListCardType = {
  id: string,
} & Pick <TransactionCardsProps,"name" |"type"| "value" |"category" | "date">;

const data: ListCardType[] = [
  {
    id: "1",
    name: "Venda de Bolinho",
    type: "up",
    value: "R$ 100, 00",
    date: "2024-03-20"
  },
  {
    id: "2",
    name: "Compra de ingrediente para Bolinho",
    type: "down",
    category: "Alimentação",
    value: "R$ 150, 00",
    date: "2024-03-19"
  },
  {
    id: "3",
    name: "Freela",
    type: "up",
    value: "R$ 200, 00",
    date: "2024-03-18"
  },
  {
    id: "4",
    name: "Churrasco",
    type: "down",
    category: "Alimentação",
    value: "R$ 50,00",
    date: "2024-03-17"
  },
  {
    id: "5",
    name: "Freela",
    type: "up",
    value: "R$ 300, 00",
    date: "2024-03-16"
  }
];


export function Home() {
  return (
    <Container>
      <Header isHome type="up" screenName="MyMoney" />
      <Content>
        <Total />
        <ContainerBanners>
          <Banner title="Entrada" value="R$ 6. 000, 00" type="up" />
          <Banner title="Saida" value="R$ 2. 000, 00" type="down" />
        </ContainerBanners>
        <ContainerList>
          <FlatList
           data={data}
           keyExtractor={(item)=> item.id}
           renderItem={({item})=>
             <TransactionCard  name={item.name} type={item.type} value={item.value} category={item.category} date={item.date}   />
           } 
           showsVerticalScrollIndicator={false}        
          />
        </ContainerList>
          
      </Content>
    </Container>
  );
}
