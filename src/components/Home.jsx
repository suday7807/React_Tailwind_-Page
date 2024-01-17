import React, { useState } from "react";
import { MdOutlineLightbulb } from "react-icons/md";
import { HiSpeakerWave } from "react-icons/hi2";

const Home = () => {
  const [flip, setFlip] = useState(true);
  const handleFlip = () => {
    setFlip((prev) => !prev);
  };
  return (
    <div>
      <span className=" font-bold text-4xl  bg-gradient-to-b from-blue-950 to-blue-600 text-transparent bg-clip-text ml-20">
        Relation and Functions ( Mathematics )
      </span>
      <div className=" mt-10 mb-5 font-semibold text-xl text-[#696671] flex items-center justify-center gap-12 h-5 ">
        <button className=" focus:text-[#06286E] focus:border-b-2 border-b-[#06286E]">
          Study
        </button>
        <button className=" focus:text-[#06286E] focus:border-b-2 border-b-[#06286E] ">
          Quiz
        </button>
        <button className=" focus:text-[#06286E] focus:border-b-2 border-b-[#06286E]">
          Test
        </button>
        <button className="focus:text-[#06286E] focus:border-b-2 border-b-[#06286E]">
          Game
        </button>
        <button className=" focus:text-[#06286E] focus:border-b-2 border-b-[#06286E]">
          Others
        </button>
      </div>

      <div onClick={handleFlip}>
        <div
          className={`${
            flip
              ? "flex justify-center rounded-2xl bg-gradient-to-b from-blue-950 to-blue-600 h-[394px] w-[712px] mx-auto items-center transform rotate-y-180 transition-transform duration-300 ease-in-out"
              : "flex justify-center rounded-2xl bg-gradient-to-b from-blue-500 via-gray to-blue-800 h-[394px] w-[712px] mx-auto items-center  duration-300 ease-in-out "
          }`}
        >
          <div className="  h-full w-full items-center  justify-center  ">
            <div className=" relative ">
              <MdOutlineLightbulb
                className=" absolute top-0 left-0 m-5 cursor-pointer"
                color="white"
                size={30}
              />
              <HiSpeakerWave
                className=" absolute top-0 right-0 m-5 cursor-pointer "
                color="white"
                size={30}
              />
            </div>
            <div className="flex items-center justify-center h-full ">
              <span className="text-center font-bold text-4xl">
                {flip ? "9+6+7x-2x-3" : "5x+12"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
