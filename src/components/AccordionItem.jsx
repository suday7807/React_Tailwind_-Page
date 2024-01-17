import React from "react";
import { Collapse } from "react-collapse";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";

const AccordionItem = ({ open, toggle, title, desc }) => {
  return (
    <div className=" m-9 pt-[10px] border-[1px] border-blue-600 rounded-lg">
      <div
        className="  py-[25px] px-[50px] flex justify-between items-center cursor-pointer"
        onClick={toggle}
      >
        <p className=" text-[22px] font-semibold">{title}</p>
        <div className=" text-[30px]">
          {open ? (
            <MdOutlineKeyboardArrowUp size={40} />
          ) : (
            <MdOutlineKeyboardArrowDown size={40} />
          )}
        </div>
      </div>
      <Collapse isOpened={open}>
        <div className=" px-[50px] pb-[20px]">{desc}</div>
      </Collapse>
    </div>
  );
};

export default AccordionItem;
