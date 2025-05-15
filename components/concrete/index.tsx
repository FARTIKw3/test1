import Image from "next/image";
import st from "./style.module.css";
import { concreteData } from "./data";

export const Concrete = () => {
  return (
    <div className={st.container}>
      <div className={st.container__title}>
        <div>
          <h1 className={st.title}>Бетон товарный</h1>
        </div>
        <div>
          <Image src="/svg/table.svg" width={56} height={56} alt="table" />
        </div>
      </div>
      <div className={st.container__content}>
        <div className={st.container__table}>
          <div>
            <span className={st.table__span}>Наименование</span>
          </div>
          <div>
            <span className={st.table__span}>Класс</span>
          </div>
          <div>
            <span className={st.table__span}>Цена</span>
          </div>
          <div>
            <span className={st.table__hidden}>Цена</span>
          </div>
        </div>
        {concreteData.map((item, index) => (
          <div key={index} className={st.container__concrete}>
            <div>
              <span className={st.concrete__span}>{item.name}</span>
            </div>
            <div>
              <span className={st.concrete__span}>{item.class}</span>
            </div>
            <div>
              <span className={st.concrete__span__red}>
                {item.price}
                <span className={st.spanRaz}>/1 м³ </span>
              </span>
            </div>
            <div>
              <button className={st.concrete__btn}>Оформить заказ</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
