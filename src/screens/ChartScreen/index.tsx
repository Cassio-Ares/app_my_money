import React, { useEffect } from "react";
import { Header } from "../../components/Header";
import { usefetchTransactions } from "../../hooks/useFetchTransactions";
import { ChartContainer, Container, Content } from "./style";
import { useIsFocused } from "@react-navigation/native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { Loading } from "../../components/Loading";
import theme from "../../theme";
import { VictoryPie } from "victory-native";


const data = [
  {quarter: 1, earnigs: 13000},
  {quarter: 2, earnigs: 10000},
  {quarter: 3, earnigs: 12000},
  {quarter: 4, earnigs: 9000},

]

export function ChartScreen() {
  const { transactions, loading, fetchTransactions } = usefetchTransactions();

  const isFocused = useIsFocused();

  useEffect(() => {
    fetchTransactions();
  }, [useIsFocused]);

  return (
    <Container>
      <Header isHome={false} screenName="Gráfico por categoria" type="up" />
      <Content
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: useBottomTabBarHeight() }}
      >
        {loading ? (
          <Loading
            background={theme.COLORS.BACKGROUND}
            loadColor={theme.COLORS.PRIMARY}
          />
        ) : (
          <ChartContainer>
            <VictoryPie 
              data={data}
              x="quarter"
              y="earnigs"
              style={{
                labels:{
                  fontSize: 14,
                  fontWeight: "bold",
                fill: theme.COLORS.LIGHT
                }
              }}
              labelRadius={86}
            />
          </ChartContainer>
        )}
      </Content>
    </Container>
  );
}
