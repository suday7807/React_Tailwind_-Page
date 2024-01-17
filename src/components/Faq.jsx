import React, { useState } from "react";
import AccordionItem from "./AccordionItem";

const Faq = () => {
  const [open, setOpen] = useState(false);
  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };
  let accordianData = [
    {
      title: "Can education flashcards be used for all age groups?",
      desc: "Yes, education flashcards can be used for all age groups and learning levels. There are flashcards designed for preschoolers, elementary schoolers, middle schoolers, high schoolers, college level, and adult learners.",
    },
    {
      title: "How do education flashcards work?",
      desc: "Education flashcards work by presenting a question or prompt on one side and the corresponding answer or information on the other. Users can review the cards repetadily reinforcing their memory and enhancing learning through repetition.",
    },
    {
      title: "Can education flashcards be used for test preparation?",
      desc: "Absolutily. Flashcards are an excellent tool for test preparation, allowing students to review key concepts, terms, and facts. They provide a quick and focused way to reinforce knowledge before exams. ",
    },
  ];
  return (
    <div>
      <h1
        className=" text-4xl font-bold  bg-gradient-to-b from-blue-950
        to-blue-600
        text-transparent
        bg-clip-text ml-20"
      >
        FAQ
      </h1>
      <div className=" grid place items-center  ">
        <div className=" px-[40px] max-w-ful ">
          {accordianData.map((data, index) => {
            return (
              <AccordionItem
                key={index}
                open={index === open}
                title={data.title}
                desc={data.desc}
                toggle={() => toggle(index)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Faq;
