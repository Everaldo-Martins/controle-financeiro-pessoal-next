'use client';
import React, { useState } from "react";
import { FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import Grid from "../Grid";
import { FaCircleXmark } from "react-icons/fa6";

type Transaction = {
  id: number;
  desc: string;
  amount: string;
  expense: boolean;
  paid: boolean;
};

type FormProps = {
  handleAdd: (transaction: Transaction) => void;
  transactionsList: Transaction[];
  setTransactionsList: React.Dispatch<React.SetStateAction<Transaction[]>>;
};

const Form: React.FC<FormProps> = ({ handleAdd, transactionsList, setTransactionsList }) => {
  const [desc, setDesc] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [isExpense, setExpense] = useState<boolean>(false);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const generateID = () => Math.round(Math.random() * 1000);

  const handleSave = () => {
    if (!desc || !amount) {
      alert("Informe a descrição e o valor!");
      return;
    } else if (Number(amount) < 1) {
      alert("O valor tem que ser positivo!");
      return;
    }

    const transaction: Transaction = {
      id: generateID(),
      desc,
      amount,
      expense: isExpense,
      paid: false,
    };

    handleAdd(transaction);

    setDesc("");
    setAmount("");
    setModalOpen(false);
  };

  return (
    <>
      <Grid itens={transactionsList} setItens={setTransactionsList} />

      <button
        className="w-full flex flex-row justify-center gap-2 bg-green-600 hover:bg-green-800 px-4 py-2 font-bold"
        onClick={() => setModalOpen(true)}
      >
        <FaPlusCircle className="text-2xl" />
        Adicionar Item
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur">
          <div className="bg-background p-6 rounded-lg shadow-lg w-full max-w-lg z-50">
            <h2 className="text-xl font-bold mb-4">Adicionar Novo Item</h2>
            <section className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label>Descrição</label>
                <input
                  className="w-full bg-background border border-solid border-gray-300 p-2 text-base text-foreground rounded-lg focus:outline-none focus:ring focus:ring-green-500"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label>Valor</label>
                <input
                  className="w-full bg-background border border-solid border-gray-300 p-2 text-base text-foreground rounded-lg focus:outline-none focus:ring focus:ring-green-500"
                  value={amount}
                  type="number"
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label>Tipo</label>
                <select
                  className="w-full bg-background border border-solid border-gray-300 p-2 text-base text-foreground rounded-lg focus:outline-none focus:ring focus:ring-green-500"
                  value={isExpense ? "expense" : "income"}
                  onChange={(e) => setExpense(e.target.value === "expense")}
                >
                  <option value="income">Entrada</option>
                  <option value="expense">Saída</option>
                </select>
              </div>
              <div className="flex justify-end gap-2">
                <button
                  className="flex flex-row gap-2 bg-green-600 hover:bg-green-800 px-4 py-2 rounded-lg font-bold"
                  onClick={handleSave}
                >
                  <FaCheckCircle className="text-2xl" />
                  Salvar
                </button>
                <button
                  className="flex flex-row gap-2 bg-red-400 px-4 py-2 rounded-lg text-foreground hover:bg-red-500"
                  onClick={() => setModalOpen(false)}
                >
                  <FaCircleXmark className="text-2xl" />
                  Cancelar
                </button>
              </div>
            </section>
          </div>
        </div>
      )}
    </>
  );
};

export default Form;