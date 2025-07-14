import Image from "next/image";
import { FaBath, FaStar } from "react-icons/fa";
import { IoBed } from "react-icons/io5";
import { MdPeople } from "react-icons/md";
import propertyImage from "@/public/assets/property-image.png";
import React from "react";
import { PropertyProps } from "@/interfaces";
import PropertyCategory from "../common/PropertyCategory";

const PropertyCard: React.FC<PropertyProps> = ({
  name,
  address,
  rating,
  category,
  price,
  image,
  discount,
  offers,
}) => {
  return (
    <div className="space-y-2">
      <Image
        src={propertyImage}
        alt="property-1"
        className="rounded-xl h-[30vh]"
      />
      <div className="space-x-2">
        {category.map((category, key: number) => {
          return <PropertyCategory category={category} key={key} />;
        })}
      </div>
      <div className="flex justify-between items-start text-sm">
        <div>
          <h3>{name}</h3>
          <p className="text-gray-500">
            {address.state}, {address.city}, {address.country}
          </p>
        </div>
        <div className="flex items-center gap-1">
          <FaStar color="#FAC02B" />
          <span>{rating}</span>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="property-icons flex items-center gap-5 border border-gray-200 px-2 py-1 rounded-full text-sm">
          <div className="icons flex items-center gap-1">
            <span>
              <IoBed />
            </span>
            <span className="text-gray-600">{offers.bed}</span>
          </div>
          <div className="icons flex items-center gap-1">
            <span>
              <FaBath />
            </span>
            <span className="text-gray-600">{offers.shower}</span>
          </div>
          <div className="icons flex items-center gap-1">
            <span>
              <MdPeople />
            </span>
            <span className="text-gray-600">{offers.occupants}</span>
          </div>
        </div>
        <span className="price text-lg font-semibold text-gray-900">
          ${price} <span className="text-sm text-gray-500">/n</span>
        </span>
      </div>
    </div>
  );
};

export default PropertyCard;
