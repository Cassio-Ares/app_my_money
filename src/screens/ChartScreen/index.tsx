import React, { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { usefetchTransactions } from "../../hooks/useFetchTransactions";
import { ChartContainer, Container, Content, MonthButton, MonthIcon, MonthSelect, Month } from "./style";
import { useIsFocused } from "@react-navigation/native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { Loading } from "../../components/Loading";
import theme from "../../theme";
import { VictoryPie } from "victory-native";
import {
  ListCardType,
  formatedValue,
  getTransactionsByMonth,
} from "../../helpers/formatted";
import { categories } from "../../utils/Categories";
import { Category } from "../../components/Category";
import { addMonths, format, subMonths } from "date-fns";

interface CategoryData {
  key: string;
  name: string;
  color: string;
  total: string;
  percent: string;
}

export function ChartScreen() {
  const { transactions, loading, fetchTransactions } = usefetchTransactions();

  const [selectedDate, setselectedDate] = useState(new Date());
  const [totalByCategory, setTotalByCategory] = useState<CategoryData[]>([]);

  const isFocused = useIsFocused();

  function getTransactionsByCategory(transactions: ListCardType[]) {
    const newTotal: CategoryData[] = [];
    if (!transactions) return;

    const transactionsFilterByDate = getTransactionsByMonth(
      transactions,
      selectedDate
    );
    const totalByDate = transactionsFilterByDate.reduce(
      (acc, item) => acc + parseFloat(item.value),
      0
    );
    categories?.forEach((category) => {
      let categorySum = 0;

      transactionsFilterByDate?.forEach((transaction) => {
        if (transaction.category === category.key) {
          categorySum += parseFloat(transaction.value);
        }
      });

      if (categorySum > 0) {
        const total = formatedValue(categorySum);
        const percent = `${((categorySum / totalByDate) * 100).toFixed(0)}%`;

        newTotal.push({
          key: category.key,
          name: category.name,
          color: category.color,
          total,
          percent,
        });
      }
    });

    setTotalByCategory(newTotal);
  }
 
  function handleDateChange(options: "back" | "next"){
     if(options === "next"){
      const newDate = addMonths(selectedDate, 1)
      setselectedDate(newDate)

     }else if(options === "back"){
       const newDate = subMonths(selectedDate, 1)
       setselectedDate(newDate)
     }
  }

  useEffect(() => {
    fetchTransactions();
  }, [useIsFocused]);

  useEffect(() => {
    if (transactions && transactions.length > 0) {
      getTransactionsByCategory(transactions);
    }
  }, [transactions, selectedDate]);

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
          <>
          <MonthSelect>
               <MonthButton onPress={()=> handleDateChange("back")}>
                   <MonthIcon name= "chevron-left"/>
                </MonthButton>
                <Month>{format(selectedDate, "MMM, yyyy")}</Month>
                <MonthButton onPress={()=> handleDateChange("next")}>
                   <MonthIcon name="chevron-right"/>
                </MonthButton>
          </MonthSelect>
            <ChartContainer>
              <VictoryPie
                data={totalByCategory}
                x="percent"
                y="total"
                colorScale={totalByCategory?.map((item) => item.color)}
                style={{
                  labels: {
                    fontSize: 14,
                    fontWeight: "bold",
                    fill: theme.COLORS.LIGHT,
                  },
                }}
                labelRadius={86}
              />
            </ChartContainer>
            {
             totalByCategory?.map((totalByCategory)=>
               <Category key={totalByCategory.key} color={totalByCategory.color} title={totalByCategory.name} value={totalByCategory.total}/>
             )
            }
           
          </>
        )}
      </Content>
    </Container>
  );
}
