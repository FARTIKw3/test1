"use client";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import st from "./style.module.css";
import Image from "next/image";
interface FormProps {
  imageSrc: string;
  imageAlt?: string;
}
export const Form = ({ imageSrc, imageAlt = "image" }: FormProps) => {
  const [phone, setPhone] = useState("");

  return (
    <div className={st.container}>
      <div className={st.form__container}>
        <div className={st.form__title}>
          <h1>
            <span className={st.form__span}>Бесплатный</span> вызов замерщика
          </h1>
        </div>
        <div className={st.form__paragh}>
          <p>
            Бесплатно вызвать замерщика для точного расчета объема, подбора
            марки бетона и организации подъездных путей
          </p>
        </div>
        <form className={st.form}>
          <div className={st.form__phoneFlag}>
            <input type="text" placeholder="Имя" className={st.form__input} />
          </div>

          <div className={st.form__phoneFlag}>
            <PhoneInput
              country={"ru"}
              value={phone}
              onChange={setPhone}
              inputClass={st.phoneInput}
              buttonClass={st.flagDropdown}
              containerClass={st.phoneContainer}
              placeholder="+7 (999) 999-99-99"
            />
          </div>
          <label className={st.checkbox}>
            <input type="checkbox" className={st.checkbox__input} />
            <span className={st.checkbox__custom}></span>
            <span>Соглашаюсь на обработку персональных данных</span>
          </label>

          <button className={st.button}>Оставить заявку</button>
        </form>
      </div>
      <div className={st.imageWrapper}>
        <Image src={imageSrc} alt={imageAlt} fill className={st.image} />
      </div>
    </div>
  );
};
