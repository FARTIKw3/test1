"use client";

import { useState } from "react";
import { Navigation } from "../navigation";
import st from "./style.module.css";
import Image from "next/image";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(!isOpen);

  return (
    <>
      <div className={st.headerBackground} onClick={close}>
        <Navigation isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className={st.header__container}>
          <div className={st.header__info}>
            <h1 className={st.header__title}>
              <span className={st.header__span}>Изготовим</span> и
              <span className={st.header__span}> доставим</span> бетон любой
              марки до вашего объекта
            </h1>
          </div>
          <div className={st.header__services}>
            <div className={st.header__services__icon}>
              <div>
                <Image
                  src="/svg/like.svg"
                  width={40}
                  height={40}
                  alt="iconService"
                />
              </div>
              <div className={st.header__services__text}>
                <span>Лучшая цена за 1м3 от производителя</span>
              </div>
            </div>
            <div className={st.header__services__icon}>
              <div>
                <Image
                  src="/svg/car.svg"
                  width={40}
                  height={40}
                  alt="iconService"
                />
              </div>
              <div className={st.header__services__text}>
                <span>Круглосуточная и оперативная доставка</span>
              </div>
            </div>
            <div className={st.header__services__icon}>
              <div>
                <Image
                  src="/svg/calculation.svg"
                  width={40}
                  height={40}
                  alt="iconService"
                />
              </div>
              <div className={st.header__services__text}>
                <span>Бесплатный выезд технолога для расчета объема</span>
              </div>
            </div>
          </div>
          <div className={st.header__press}>
            <button className={st.header__press__button}>
              Оставить заявку
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
