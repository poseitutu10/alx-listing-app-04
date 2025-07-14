import React from "react";
import logo from "@/public/assets/icon2.png";
import Image from "next/image";
import { footerDetails } from "@/constants";
import FooterList from "../common/FooterList";

const Footer: React.FC = () => {
  return (
    <footer className="text-white">
      <div className="first bg-[#34967C] w-full h-[5vh]"></div>
      <div className="main bg-[#222222] px-10 py-5">
        <div className="grid md:grid-cols-2 gap-10 border-b border-gray-700 pb-20">
          <div className="flex flex-col gap-5">
            <Image src={logo} alt="logo" className="w-10 h-5" />
            <p className="text-xs md:text-sm text-gray-300 md:w-[75%]">
              ALX is a platform where travelers can discover and book unique,
              comfortable, and affordable lodging options worldwide. From cozy
              city apartments and tranquil countryside retreats to exotic
              beachside villas, ALX connects you with the perfect place to stay
              for any trip.
            </p>
          </div>
          <div className="flex gap-5 md:justify-between">
            {footerDetails.map(({ name, details }, key: number) => {
              return <FooterList name={name} details={details} key={key} />;
            })}
          </div>
        </div>
        <div className="bottom text-xs md:text-sm text-gray-500 flex flex-col md:flex-row justify-between gap-5 pt-3">
          <p>
            Some hotel requires you to cancel more than 24 hours before
            check-in. Details <span className="text-green-600 cursor-pointer">here</span>
          </p>
          <ul className="flex gap-2 md:gap-5">
            <li>Terms of Service</li>
            <li>Policy service</li>
            <li>Cookie Policy</li>
            <li>Partners</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
