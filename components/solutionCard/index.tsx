"use client";
import { TbBorderCornerSquare } from "react-icons/tb";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import st from "./style.module.css";
import { useState } from "react";
interface SolutionItem {
  name: string;
  price: string;
  description: string;
}
export const SolutionCard = ({ item }: { item: SolutionItem }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));

  return (
    <div className={st.solution}>
      <div className={st.solution__header}>
        <div className={st.solution__title}>
          <h2>{item.name}</h2>
        </div>
        <div className={st.solution__corner}>
          <TbBorderCornerSquare size={22} />
        </div>
      </div>

      <div>
        <span className={st.solution__span__red}>
          {item.price}
          <span className={st.spanRaz}>/1 м³</span>
        </span>
      </div>

      <div className={st.solution__paragh}>
        <p>{item.description}</p>
      </div>

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
    </div>
  );
};
