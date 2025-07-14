import { InputProps } from "@/interfaces";
import React from "react";

const TextInput: React.FC<InputProps> = ({
  labelName,
  inputName,
  value,
  placeholder,
  onChange,
  type
}) => {
  return (
    <div className="flex flex-col text-sm border-r border-gray-300 font-semibold">
      <label htmlFor="location">{labelName}</label>
      <input
        type={type}
        name={inputName}
        className=" outline-none py-1 text-gray-500"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default TextInput;
