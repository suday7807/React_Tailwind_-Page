import React from "react";
import logo from "../assets/logo.PNG";

const Navbar = () => {
  return (
    <>
      <div className=" bg-[#F9F9F9] flex justify-between items-center px-4 py-4 ml-20 mr-20">
        <img src={logo} alt="Logo" />
        <ul className=" flex gap-4 items-center  text-[#3A3740] text-[18px] ">
          <li className=" cursor-pointer">Home</li>
          <li className=" cursor-pointer">Flashcard</li>
          <li className=" cursor-pointer">Contact</li>
          <li className=" cursor-pointer">FAQ</li>
          <button className=" text-[#FFF] rounded-full bg-gradient-to-b from-blue-950 to-blue-600 py-[13px] px-[40px]">
            Login
          </button>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
