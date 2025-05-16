"use client";
import { useState } from "react";
import { accordionData } from "./data";
import st from "./style.module.css";
import clsx from "clsx";
import { IoIosArrowUp } from "react-icons/io";

export const Accordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={st.container}>
      <h1 className={st.title}>Частозадаваемые вопросы</h1>
      <div className={st.accordionList}>
        {accordionData.map((item, i) => (
          <div
            className={clsx(st.accordionItem, {
              [st.open]: openIndex === i,
            })}
            key={i}
          >
            <button className={st.accordionButton} onClick={() => toggle(i)}>
              <span className={st.accordionTitle}>
                {item.title}
                <div className={clsx(st.arrow, openIndex === i && st.active)}>
                  <IoIosArrowUp />
                </div>
              </span>
            </button>
            <div
              className={clsx(st.accordionContent, {
                [st.show]: openIndex === i,
              })}
            >
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
