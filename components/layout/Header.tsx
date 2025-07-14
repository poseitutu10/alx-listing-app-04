import { LuBriefcaseBusiness } from "react-icons/lu";
import Button from "../common/Button";
import logo from "@/public/assets/icon.png";
import Image from "next/image";
import Link from "next/link";
import TextInput from "../common/TextInput";
import React, { useState } from "react";
import { FormProps } from "@/interfaces";

const Header: React.FC = () => {
  const [form, setForm] = useState<FormProps>({
    location: "",
    check_in: "",
    addGuest: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm((form) => {
      return {
        ...form,
        [name]: value,
      };
    });
  };
  return (
    <header>
      <div className="first bg-[#34967C] w-full p-3 text-white flex items-center justify-between md:justify-center gap-5">
        <div className="flex gap-3 items-start w-3/5 md:w-auto">
          <LuBriefcaseBusiness size={20} />
          <p className="font-semibold text-xs md:text-sm">
            Overseas trips? Get the latest information on travel guides
          </p>
        </div>

        <Button
          buttonName="More info"
          buttonStyles="bg-gray-900 text-white text-xs font-semibold p-2 rounded-full cursor-pointer"
        />
      </div>
      <div className="next flex flex-cols items-center justify-between shadow-xs py-3 px-[5%]">
        <Link href={`/`}>
          <Image src={logo} alt="logo" className="w-10 h-5" />
        </Link>
        <form
          aria-label="search form"
          className="mid md:border border-gray-200 md:rounded-full px-10 py-2 md:w-1/2 h-full flex-row gap-5 hidden md:flex"
        >
          <TextInput
            labelName="Location"
            inputName="location"
            type="text"
            value={form.location}
            placeholder="Search for destination"
            onChange={handleChange}
          />
          <TextInput
            labelName="Check in"
            inputName="check_in"
            type="text"
            value={form.check_in}
            placeholder="Add date"
            onChange={handleChange}
          />
          <TextInput
            labelName="People"
            inputName="addGuest"
            type="text"
            value={form.addGuest}
            placeholder="Add guest"
            onChange={handleChange}
          />
        </form>
        <nav>
          <ul className="space-x-5">
            <Link href={`/signin`}>
              <Button
                buttonName="Sign in"
                buttonStyles="bg-[#34967C] px-4 py-2 text-white rounded-full text-xs md:text-sm cursor-pointer"
              />
            </Link>
            <Link href={`/signup`}>
              <Button
                buttonName="Sign in"
                buttonStyles="border border-[#34967C] text-[#34967C] px-4 py-2 rounded-full text-xs md:text-sm cursor-pointer"
              />
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
