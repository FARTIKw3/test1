"use client";
import Image from "next/image";
import st from "./style.module.css";
import { concreteData } from "./data";
import { useState } from "react";
import clsx from "clsx";
import { Count } from "../count";

export const Concrete = () => {
  const [open, setOpen] = useState(false);

  const handlePress = () => setOpen(!open);

  return (
    <div className={st.container}>
      <div className={st.container__title}>
        <div>
          <h1 className={st.title}>Бетон товарный</h1>
        </div>
        <button aria-label="view" onClick={handlePress} className={st.button}>
          <div className={clsx(st.list, open && st.active)}>
            <Image src="/svg/table.svg" width={56} height={56} alt="table" />
          </div>
          <div className={clsx(st.table, open && st.active)}>
            <Image
              src="/svg/view-list.svg"
              width={56}
              height={56}
              alt="view-list"
            />
          </div>
        </button>
      </div>
      <div className={clsx(st.container__content, open && st.active)}>
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
      <div className={clsx(st.view__container, open && st.active)}>
        {concreteData.map((item, index) => (
          <div key={index} className={st.view__card}>
            <div className={st.view__header}>
              <div className={st.view__title__container}>
                <h2 className={st.view__title}>Бетон B7.5 M-100</h2>
                <div>
                  <span className={st.concrete__span__red}>
                    {item.price}
                    <span className={st.spanRaz}>/1 м³</span>
                  </span>
                </div>
              </div>
              <div className={st.view__block__name}>
                <span>M-100</span>
              </div>
            </div>
            <div className={st.view__characteristic}>
              <div>
                <span className={st.view__span}>Водонепроницаемость</span>
                <div className={st.view__number}>W2</div>
              </div>
              <div>
                <span className={st.view__span}>Морозостойкость</span>
                <div className={st.view__number}>F75</div>
              </div>
              <div>
                <span className={st.view__span}>Пластичность</span>
                <div className={st.view__number}>П3</div>
              </div>
            </div>
            <Count />
          </div>
        ))}
        <div className={st.view__card__select}>
          <div className={st.view__header}>
            <div className={st.view__title__container}>
              <h2 className={st.view__title}>Дополнения к бетону</h2>
              <div>
                <span className={st.concrete__span__red}>
                  100₽
                  <span className={st.spanRaz}>/1 м³</span>
                </span>
              </div>
            </div>
          </div>
          <div className={st.view__selects}>
            <div className={st.select__group}>
              <label htmlFor="frost">Противоморозная добавка</label>
              <select id="frost" className={st.select}>
                <option>Без добавки</option>
                <option>До -10°C</option>
                <option>До -20°C</option>
              </select>
            </div>

            <div className={st.select__group}>
              <label htmlFor="strength">Прочность</label>
              <select id="strength" className={st.select}>
                <option>Схема A</option>
                <option>Схема B</option>
              </select>
            </div>

            <div className={st.select__group}>
              <label htmlFor="fibra">Фибра</label>
              <select id="fibra" className={st.select}>
                <option>Нет</option>
                <option>Стальная</option>
              </select>
            </div>

            <div className={st.select__group}>
              <label htmlFor="keram">Керамзитобетон</label>
              <select id="keram" className={st.select}>
                <option>Нет</option>
                <option>Да</option>
              </select>
            </div>
          </div>
          <Count />
        </div>
      </div>
    </div>
  );
};
