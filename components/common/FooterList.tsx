import { FooterDetails } from "@/interfaces";
import React from "react";

const FooterList: React.FC<FooterDetails> = ({ name, details }) => {
  return (
    <div className="space-y-5">
      <h2 className="md:text-lg font-semibold text-gray-300">{name}</h2>
      <ul className="text-sm text-gray-400 space-y-2">
        {details.map((detail, key: number) => {
          return <li key={key}>{detail}</li>;
        })}
      </ul>
    </div>
  );
};

export default FooterList;
