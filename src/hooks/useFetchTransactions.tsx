import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import { api } from "../server/api";
import { ListCardType } from "../helpers/formatted";


export function usefetchTransactions(){

    const [transactions, setTransactions] = useState<ListCardType[]>();
    const [loading, setLoading] = useState<boolean>(false);


    async function fetchTransactions() {
        try {
          setLoading(true);
          const { data } = await api.get("/transactions");
          setTransactions(data);
        } catch (error) {
          Alert.alert("Error no servidor, tente mais tarde.");
        } finally {
          setLoading(false);
        }
      }

      
  useEffect(() => {
    fetchTransactions();
  }, []);
    
  return{ transactions, loading, fetchTransactions}
}