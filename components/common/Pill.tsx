import React from "react";
import Button from "./Button";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { useDispatch } from "react-redux";
import {
  all,
  firePlace,
  freeParking,
  selfCheckin,
} from "@/store/slices/PillSlice";

const Pill: React.FC = () => {
  const category = useSelector((state: RootState) => state.pill.value);
  const dispatch: AppDispatch = useDispatch();
  return (
    <div className="space-x-2">
      <Button
        buttonName="All"
        onClick={() => {
          dispatch(all());
        }}
        buttonStyles={`border ${
          category == "All"
            ? "border-green-600 bg-green-100"
            : "border-gray-200"
        }  rounded-full text-gray-500 font-semibold py-1 px-2 md:px-4 cursor-pointer text-xs md:text-sm`}
      />
      <Button
        buttonName="Fire Place"
        buttonStyles={`border ${
          category == "Fireplace"
            ? "border-green-600 bg-green-100"
            : "border-gray-200"
        }  rounded-full text-gray-500 font-semibold py-1 px-2 md:px-4 cursor-pointer text-xs md:text-sm`}
        onClick={() => {
          dispatch(firePlace());
        }}
      />
      <Button
        buttonName="Free Parking"
        buttonStyles={`border ${
          category == "Free Parking"
            ? "border-green-600 bg-green-100"
            : "border-gray-200"
        }  rounded-full text-gray-500 font-semibold py-1 px-2 md:px-4 cursor-pointer text-xs md:text-sm`}
        onClick={() => {
          dispatch(freeParking());
        }}
      />
      <Button
        buttonName="Self Checkin"
        buttonStyles={`border ${
          category == "Self Checkin"
            ? "border-green-600 bg-green-100"
            : "border-gray-200"
        }  rounded-full text-gray-500 font-semibold py-1 px-2 md:px-4 cursor-pointer text-xs md:text-sm`}
        onClick={() => {
          dispatch(selfCheckin());
        }}
      />
    </div>
  );
};

export default Pill;
