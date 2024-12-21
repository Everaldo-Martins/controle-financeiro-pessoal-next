import React from "react";
import ResumeItem from "./ResumeItem";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign
} from "react-icons/fa";

type ResumeProps = {
  income: string | number;
  expense: string | number;
  saldo: string | number;
};

const Resume: React.FC<ResumeProps> = ({ income, expense, saldo }) => {
  return (
    <div className="w-full flex flex-col sm:flex-row justify-between align-middle gap-4 p-3 -mt-16">
      <ResumeItem
        title="Entradas"
        Icon={FaRegArrowAltCircleUp}
        value={income}
      />
      <ResumeItem
        title="Saídas"
        Icon={FaRegArrowAltCircleDown}
        value={expense}
      />
      <ResumeItem title="Saldo" Icon={FaDollarSign} value={saldo} />
    </div>      
  );
};

export default Resume;
