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
  return (
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
          <FaCircleInfo title="Valor Positivo." className="text-red-400 text-xl" />
        ) : item.paid ? (
          <FaCircleCheck title="Pago." className="text-green-600 text-xl" />
        ) : (
          <FaCircle title="Não Pago." className="text-dark-gray text-xl" />
        )}
      </td>
      <td className="w-1/12 p-2">
        <FaEdit title="Editar" onClick={() => onEdit(item.id)} />
      </td>
      <td className="w-1/12 p-2">
        <FaTrash title="Excluir" onClick={() => onDelete(item.id)} />
      </td>
    </tr>
  );
};

export default GridItem;