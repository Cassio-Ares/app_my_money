import React, { useEffect } from "react";
import { Container, ContainerBanners, Content, ContainerList } from "./style";
import { Total } from "../../components/Total";
import { Banner } from "../../components/Banner";
import { Header } from "../../components/Header";
import {
  TransactionCard,
  TransactionCardsProps,
} from "../../components/TransactionCard";
import { FlatList } from "react-native";
import { Loading } from "../../components/Loading";
import theme from "../../theme";
import { formatedValue, getTotalForTypes } from "../../helpers/formatted";
import { useIsFocused } from "@react-navigation/native";
import { usefetchTransactions } from "../../hooks/useFetchTransactions";


export function Home() {
  const{  transactions, loading, fetchTransactions } = usefetchTransactions()
  
const {totalDown, totalUp, total} = getTotalForTypes(transactions)

const isFocused = useIsFocused()

  function renderListTransactions() {
    return (
      <ContainerList>
        <FlatList
          data={transactions}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TransactionCard
              name={item.name}
              type={item.type}
              value={formatedValue(item.value)}
              category={item.category}
              date={item.date}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </ContainerList>
    );
  }

  useEffect(() => {
    fetchTransactions();
  }, [isFocused]);

  return (
    <Container>
      <Header isHome type="up" screenName="MyMoney" />
      <Content>
        <Total value={total}/>
        <ContainerBanners>
          <Banner title="Entrada" value={totalUp} type="up" />
          <Banner title="Saida" value={totalDown} type="down" />
        </ContainerBanners>

        {loading ? (
          <Loading
            background={theme.COLORS.BACKGROUND}
            loadColor={theme.COLORS.PRIMARY}
          />
        ) : (
          renderListTransactions()
        )}
      </Content>
    </Container>
  );
}
