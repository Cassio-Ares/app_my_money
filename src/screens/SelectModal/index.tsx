import React, { useState } from "react";
import { Container, Content, Category, Icon, Name, Separator } from "./style";
import { FlatList } from "react-native";
import { categories } from "../../utils/Categories";
import { Header } from "../../components/Header";

type CategoryType = {
   key: string;
   name: string;
}


interface Props{
  setCategory: (item: CategoryType)=> void;
  close: () => void;
}


export function SelectModal({setCategory, close}:Props) {
  

  function handleSelectCategory(item: CategoryType){
    setCategory(item);
    close();
  }

  return (
    <Container>
      <Header isHome={false} screenName="Selecione a Categoria" type="down" />
      <Content>
        <FlatList
          style={{ flex: 1, width: "100%" }}
          data={categories}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => (
            <Category onPress={()=> handleSelectCategory(item)}>
              <Icon name={item.icon} />
              <Name>{item.name}</Name>
            </Category>
          )}
          ItemSeparatorComponent={()=> <Separator/>}
        />
      </Content>
    </Container>
  );
}
