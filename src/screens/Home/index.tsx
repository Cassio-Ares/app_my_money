import React, { useEffect, useState } from "react";
import { api } from "../../server/api";
import { Container, ContainerBanners, Content, ContainerList } from "./style";
import { Total } from "../../components/Total";
import { Banner } from "../../components/Banner";
import { Header } from "../../components/Header";
import {
  TransactionCard,
  TransactionCardsProps,
} from "../../components/TransactionCard";
import { Alert, FlatList } from "react-native";
import { Loading } from "../../components/Loading";
import theme from "../../theme";

export type ListCardType = {
  id: string;
} & Pick<
  TransactionCardsProps,
  "name" | "type" | "value" | "category" | "date"
>;

export function Home() {
  const [transaction, setTransactions] = useState<ListCardType[]>();
  const [loading, setLoading] = useState<boolean>(false);

  async function fetchTransactions() {
    try {
      setLoading(true);
      const { data } = await api.get("/transactions");
      setTransactions(data);
    } catch (error) {
      Alert.alert("Error no servidor, tente mais tarde.")
    } finally {
      setLoading(false);
    }
  }

  function renderListTransactions(){
    return(
      <ContainerList>
      <FlatList
        data={transaction}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TransactionCard
            name={item.name}
            type={item.type}
            value={item.value}
            category={item.category}
            date={item.date}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </ContainerList>
    )
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <Container>
      <Header isHome type="up" screenName="MyMoney" />
      <Content>
        <Total />
        <ContainerBanners>
          <Banner title="Entrada" value="R$ 6. 000, 00" type="up" />
          <Banner title="Saida" value="R$ 2. 000, 00" type="down" />
        </ContainerBanners>
        
       { loading ? <Loading background={theme.COLORS.BACKGROUND} loadColor={theme.COLORS.PRIMARY} /> : renderListTransactions()}

      </Content>
    </Container>
  );
}
