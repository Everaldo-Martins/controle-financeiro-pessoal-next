'use client';
import { useEffect, useState } from 'react';
import Resume from "./components/Resume";
import Form from "./components/Form";

type Transaction = {
  id: number;
  desc: string;
  amount: string;
  expense: boolean;
  paid: boolean;
};

export default function Home() {
  const [transactionsList, setTransactionsList] = useState<Transaction[]>([]);
  const [income, setIncome] = useState<string>("R$ 0.00");
  const [expense, setExpense] = useState<string>("R$ 0.00");
  const [saldo, setTotal] = useState<string>("R$ 0.00");

  useEffect(() => {
    const data = localStorage.getItem("transactions");
    if (data) {
      setTransactionsList(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    const amountExpense = transactionsList
      .filter((item) => item.expense)
      .map((transaction) => Number(transaction.amount));

    const amountIncome = transactionsList
      .filter((item) => !item.expense)
      .map((transaction) => Number(transaction.amount));

    const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    const saldo = Math.abs(Number(income) - Number(expense)).toFixed(2);

    setIncome(`R$ ${income}`);
    setExpense(`R$ ${expense}`);
    setTotal(`${Number(income) < Number(expense) ? "-" : ""}R$ ${saldo}`);

    localStorage.setItem("transactions", JSON.stringify(transactionsList));
  }, [transactionsList]);

  const handleAdd = (transaction: Omit<Transaction, "id">) => {
    const newTransaction: Transaction = {
      id: Math.round(Math.random() * 1000),
      ...transaction,
    };

    const newArrayTransactions = [...transactionsList, newTransaction];
    setTransactionsList(newArrayTransactions);
  };

  return (
    <>    
      <Resume income={income} expense={expense} saldo={saldo} />
      <Form
        handleAdd={handleAdd}
        transactionsList={transactionsList}
        setTransactionsList={setTransactionsList}
      />
    </>
  );
}