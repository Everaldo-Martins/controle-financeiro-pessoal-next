'use client';
import React, { useState } from "react";
import GridItem from "./GridItem";
import { FaCheck, FaCircleXmark, FaXmark } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";

type Transaction = {
  id: number;
  desc: string;
  amount: string;
  expense: boolean;
  paid: boolean;
};

type GridProps = {
  itens: Transaction[];
  setItens: React.Dispatch<React.SetStateAction<Transaction[]>>;
};

const Grid: React.FC<GridProps> = ({ itens, setItens }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);
  const [editingItem, setEditingItem] = useState<Transaction | null>(null);

  function saveEdit(updatedItem: Transaction) {
    const updatedArray = itens.map((transaction) =>
      transaction.id === updatedItem.id ? updatedItem : transaction
    );
    setItens(updatedArray);
    setEditingItem(null);
    localStorage.setItem("transactions", JSON.stringify(updatedArray));
  }

  const handleDeleteClick = (id: number) => {
    setSelectedItemId(id);
    setShowModal(true);
  };

  const confirmDelete = () => {
    if (selectedItemId !== null) {
      setItens((prev) => prev.filter((item) => item.id !== selectedItemId));
      setSelectedItemId(null);
      setShowModal(false);
    }
  };

  const onEdit = (item: Transaction) => {
    setEditingItem(item);
  };

  const handleEditChange = (field: keyof Transaction, value: string | boolean) => {
    if (editingItem) {
      setEditingItem({ ...editingItem, [field]: value });
    }
  };

  return (
    <>
      <table className="w-full table-fixed border-collapse">
        <thead>
          <tr>
            <th className="w-1/12 text-left p-2">Tipo</th>
            <th className="w-1/3 text-left p-2">Descrição</th>
            <th className="w-1/4 text-left p-2">Valor</th>
            <th className="w-1/6 text-left p-2">Pago</th>
            <th colSpan={2} className="w-1/6 text-left p-2">Ações</th>
          </tr>
        </thead>
        <tbody>
          {itens?.map((item) => (
            <React.Fragment key={item.id}>
              {editingItem?.id === item.id ? (
                <tr className="bg-medium-gray">
                  <td className="p-2">
                    <select
                      className="w-full bg-background p-2 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-500"
                      value={editingItem?.expense ? "expense" : "income"}
                      onChange={(e) => handleEditChange("expense", e.target.value === "expense")}
                    >
                      <option value="income">Entrada</option>
                      <option value="expense">Saída</option>
                    </select>
                  </td>
                  <td className="p-2">
                    <input
                      className="w-full bg-background p-2 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-500"
                      type="text"
                      value={editingItem.desc}
                      onChange={(e) => handleEditChange("desc", e.target.value)}
                    />
                  </td>
                  <td className="p-2">
                    <input
                      className="w-full bg-background p-2 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-500"
                      type="text"
                      value={editingItem.amount}
                      onChange={(e) => handleEditChange("amount", e.target.value)}
                    />
                  </td>
                  <td className="p-2">
                    {
                      editingItem.expense && (
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            className="sr-only peer"
                            type="checkbox"
                            checked={editingItem.paid}
                            onChange={(e) => handleEditChange("paid", e.target.checked)}
                          />
                          <div className="w-20 h-9 bg-dark-gray border border-gray-300 peer-focus:outline-0 peer-focus:ring-transparent rounded-full peer transition-all ease-in-out duration-500 peer-checked:after:translate-x-11 peer-checked:after:border-green-400 after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-green-600 after:border-green-400 after:border after:rounded-full after:h-7 after:w-7 after:transition-all"></div>
                        </label>
                      )
                    }
                  </td>
                  <td className="w-1/12 text-center p-2">
                    <button
                      className="flex flex-row gap-2 bg-green-600 hover:bg-green-800 px-4 py-2 rounded-lg font-bold"
                      onClick={() => saveEdit(editingItem)}
                    >
                      <FaCheck />
                    </button>
                  </td>
                  <td className="w-1/12 text-center p-2">
                    <button
                      className="flex flex-row gap-2 bg-red-400 hover:bg-red-500 px-4 py-2 rounded-lg font-bold"
                      onClick={() => setEditingItem(null)}
                    >
                      <FaXmark />
                    </button>
                  </td>
                </tr>
              ) : (
                <GridItem
                  key={item.id}
                  item={item}
                  onDelete={handleDeleteClick}
                  onEdit={() => onEdit(item)}
                />
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>

      {
        showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur">
            <div className="flex flex-col items-center justify-center bg-dark-gray p-6 rounded-lg shadow-lg">
              <h2 className="text-lg text-center font-semibold mb-4">
                Tem certeza que deseja deletar esse item?
              </h2>
              <div className="flex justify-end gap-4">
                <button
                  title="Salvar"
                  className="flex flex-row gap-2 bg-green-600 hover:bg-green-800 px-4 py-2 rounded-lg font-bold"
                  onClick={confirmDelete}
                >
                  <FaCheckCircle className="text-2xl" />
                  Confirmar
                </button>
                <button
                  title="Cancelar"
                  className="flex flex-row gap-2 bg-red-400 hover:bg-red-500 px-4 py-2 rounded-lg font-bold"
                  onClick={() => setShowModal(false)}
                >
                  <FaCircleXmark className="text-2xl" />
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        )
      }
    </>
  );
};

export default Grid;