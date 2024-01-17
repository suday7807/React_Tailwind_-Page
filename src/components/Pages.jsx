import React from "react";
import { TbReload } from "react-icons/tb";
import { MdFullscreen } from "react-icons/md";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

const Pages = () => {
  return (
    <div className=" flex items-center justify-center m-10 gap-20">
      <TbReload size={50} color=" blue" className=" cursor-pointer" />
      <IoIosArrowDropleftCircle
        color=" blue"
        className=" cursor-pointer "
        size={50}
      />
      <span className=" font-bold text-2xl">01/10</span>
      <IoIosArrowDroprightCircle
        size={50}
        color=" blue"
        className=" cursor-pointer"
      />
      <MdFullscreen className=" cursor-pointer" color=" blue" size={50} />
    </div>
  );
};

export default Pages;
