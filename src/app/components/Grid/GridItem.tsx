import React, { useState } from "react";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaTrash,
  FaEdit,
  FaCircle,
} from "react-icons/fa";
import { FaCircleCheck, FaCircleInfo } from "react-icons/fa6";

type Transaction = {
  id: number;
  desc: string;
  amount: string;
  expense: boolean;
  paid: boolean;
};

type GridItemProps = {
  item: Transaction;
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
};

const GridItem: React.FC<GridItemProps> = ({ item, onDelete, onEdit }) => {
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    onDelete(item.id);
    setShowModal(false);
  };

  return (
    <>
      <tr className="bg-medium-gray odd:bg-zinc-300/15">
        <td className="w-1/12 p-2">
          {item.expense ? (
            <FaRegArrowAltCircleDown className="text-red-700 text-xl" title="Saída" />
          ) : (
            <FaRegArrowAltCircleUp className="text-green-700 text-xl" title="Entrada" />
          )}
        </td>
        <td className="w-1/3 p-2">{item.desc}</td>
        <td className="w-1/5 p-2">R$ {parseFloat(item.amount).toFixed(2)}</td>
        <td className="w-1/12 p-2">
          {!item.expense ? (
            <FaCircleInfo className="text-red-400 text-xl" />
          ) :  item.paid ? (
            <FaCircleCheck className="text-green-600 text-xl" />
          ) : (
            <FaCircle className="text-dark-gray text-xl" />
          )}
        </td>
        <td className="w-1/12 p-2">
          <FaEdit onClick={() => onEdit(item.id)} />
        </td>
        <td className="w-1/12 p-2">
          <FaTrash onClick={() => setShowModal(true)} />
        </td>
      </tr>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur">
          <div className="bg-dark-gray p-6 rounded-lg shadow-lg">
            <h2 className="text-lg text-center font-semibold mb-4">
              Tem certeza que deseja deletar?
            </h2>
            <div className="flex justify-end gap-4">
              <button
                className="bg-green-600 text-zinc-200 px-4 py-2 rounded-lg hover:bg-green-400"
                onClick={handleDelete}
              >
                Confirmar
              </button>
              <button
                className="bg-red-400 px-4 py-2 text-zinc-200 rounded-lg hover:bg-red-500"
                onClick={() => setShowModal(false)}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GridItem;