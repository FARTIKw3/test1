"use client";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import st from "./style.module.css";
import { useState } from "react";

export const Count = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));
  return (
    <div className={st.solution__press}>
      <div className={st.solution__counter}>
        <button
          className={st.counter__btn}
          onClick={decrement}
          aria-label="Уменьшить количество"
        >
          <IoIosArrowDown size={18} />
        </button>
        <div>{count}</div>
        <button
          className={st.counter__btn}
          onClick={increment}
          aria-label="Увеличить количество"
        >
          <IoIosArrowUp size={18} />
        </button>
      </div>
      <button className={st.solution__button}>Оформить заказ</button>
    </div>
  );
};
