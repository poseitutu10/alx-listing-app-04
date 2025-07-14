import { PropertyCategoryProps } from "@/interfaces";
import React from "react";

const PropertyCategory: React.FC<PropertyCategoryProps> = ({category}) => {
  return (
    <span className="bg-gray-50 text-gray-700 text-xs tracking-tight px-2 py-1 rounded-full">
      {category}
    </span>
  );
};

export default PropertyCategory;
