'use client'
import { FC } from "react";

type ResumeItemProps = {
  title: string;
  Icon: FC;
  value: string | number;
};

const ResumeItem: FC<ResumeItemProps> = ({ title, Icon, value }) => {
  return (
    <div className="bg-background shadow-md shadow-foreground w-full sm:w-1/3 px-4 py-6 rounded-2xl flex flex-row justify-start items-center gap-4">
      <span className="w-1/3 text-5xl flex justify-center items-center">
        <Icon />
      </span>
      <div className="w-full flex flex-col justify-center items-start gap-2">
        <h2 className="text-xl font-semibold">{title}</h2>      
        <h1 className="text-4xl font-bold">{value}</h1>
      </div>
    </div>
  );
};

export default ResumeItem;