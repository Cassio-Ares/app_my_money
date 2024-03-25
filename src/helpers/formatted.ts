import { isSameMonth, isSameYear, parse } from "date-fns";
import { TransactionCardsProps } from "../components/TransactionCard";

export type ListCardType = {
    id: string;
  } & Pick<
    TransactionCardsProps,
    "name" | "type" | "value" | "category" | "date"
  >;
  
/**
 * função para transfroma um valor que chega como string ou numero em formato monetario
 * @param value 
 * @returns valor em formato monetario da moeda local no caso Reais no Brasil
 * 
 * ex: 
 *  <TransactionCard
              name={item.name}
              type={item.type}
              value={formatedValue(item.value)}
              category={item.category}
              date={item.date}
            />
 */

export function formatedValue(value: string | number){
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"    });
}




export function getTotalForTypes(items: ListCardType[]){
   let totalUp = 0;
   let totalDown= 0;
   
   items?.forEach((item) =>{
    const value = parseFloat(item.value);
    item.type === "up" ? (totalUp += value) : (totalDown += value);
   })

   return {
    totalUp: formatedValue(totalUp),
    totalDown: formatedValue(totalDown),
    total: formatedValue(totalUp - totalDown)
   }
}


export function getTransactionsByMonth(transactions: ListCardType[], selectedData: Date){
   const value = transactions.filter((transaction)=>
    transaction.type === "down" && 
    isSameMonth(parse(transaction.date, "dd/MM/yyyy", new Date()), selectedData) &&
    isSameYear(parse(transaction.date, "dd/MM/yyyy", new Date()), selectedData)
   )

   return value;
}