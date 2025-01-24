import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { MdLanguage } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { BsBoxFill } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="w-auto shadow-md text-white m-3 p-4 rounded-md cursor-pointer flex">
      <IoSearchOutline className="text-black text-lg mt-0.5" />
      <input
        type={"search"}
        placeholder="Search (Ctrl+/)"
        className="text-base bg-transparent w-full text-gray-600 focus:outline-none pl-2"
      />
      <div className="flex justify-end items-center text-xl space-x-4">
        <MdLanguage className="text-gray-600 cursor-pointer text-2xl" />
        <MdDarkMode className="text-gray-600 cursor-pointer" />
        <BsBoxFill className="text-gray-600 cursor-pointer" />
        <FaRegBell className="text-gray-600 cursor-pointer" />
        <FaRegUserCircle className="text-gray-600 cursor-pointer text-2xl" />
      </div>
    </nav>
  );
};

export default Navbar;
