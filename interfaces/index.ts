import React, { ReactNode } from "react";

export interface ButtonProps {
  buttonName: string;
  buttonStyles: string;
  onClick?: () => void;
}

export interface InputProps {
  labelName: string;
  inputName: string;
  value: string;
  placeholder: string;
  type: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface PropertyProps {
  name: string;
  address: { state: string; city: string; country: string };
  rating: number;
  category: string[];
  price: number;
  offers: { bed: string; shower: string; occupants: string };
  image: string;
  discount: string;
}

export interface FormProps {
  location: string;
  check_in: string;
  addGuest: string;
}

export interface FooterDetails {
  name: string;
  details: string[];
}

export interface LayoutProps {
  children: ReactNode;
}

export interface PropertyCategoryProps {
  category: string;
}

export interface bookingDetails {
  bookingDetails: {
    propertyName: string;
    price: number;
    bookingFee: number;
    totalNights: number;
    startDate: string;
  };
}
