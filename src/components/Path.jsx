import React from "react";
import { CiHome } from "react-icons/ci";
import { MdKeyboardArrowRight } from "react-icons/md";

const Path = () => {
  return (
    <div className=" font-semibold flex h-20 items-center ml-20">
      <CiHome size={20} />
      <MdKeyboardArrowRight color="blue" size={0} />
      <span className=" text-[#696671]">Flashcard</span>
      <MdKeyboardArrowRight color="blue" size={20} />
      <span className=" text-[#696671]">Mathematics</span>
      <MdKeyboardArrowRight color="blue" size={20} />
      <span className=" bg-gradient-to-b from-blue-950 to-blue-900 text-transparent bg-clip-text">
        Relation and Function
      </span>
    </div>
  );
};

export default Path;
