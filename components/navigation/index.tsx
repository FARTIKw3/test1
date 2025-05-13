"use client";
import { RiWhatsappFill } from "react-icons/ri";
import { Logo } from "../logo";
import st from "./style.module.css";
import { FaRegClock } from "react-icons/fa6";
import clsx from "clsx";
import { useEffect } from "react";

interface NavProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const Navigation = ({ isOpen, setIsOpen }: NavProps) => {
  const close = () => setIsOpen(!isOpen);
  useEffect(() => {
    const html = document.documentElement;
    const originalOverflow = html.style.overflow;

    if (isOpen) {
      html.style.overflow = "hidden";
    } else {
      html.style.overflow = originalOverflow || "auto";
    }

    return () => {
      html.style.overflow = originalOverflow;
    };
  }, [isOpen]);
  return (
    <div className={st.navbar}>
      <div className={st.navbar__container}>
        <div className={st.navbar__logo}>
          <Logo />
        </div>
        <button
          type="button"
          aria-label="menu"
          onClick={close}
          className={clsx(st.hamburger, isOpen && st.isActive)}
        >
          <span className={st.hamburgerBox}>
            <span className={st.hamburgerInner}></span>
          </span>
        </button>
        <div className={clsx(st.navbar__menu, isOpen && st.navbar__menu__open)}>
          <ul className={st.navbar__menu__list}>
            <li onClick={close}>О компании </li>
            <li onClick={close}>Продукция</li>
            <li onClick={close}>Контакты</li>
          </ul>
        </div>
      </div>
      <div className={st.navbar__contact}>
        <div className={st.navbar__contact__number}>
          <div>
            <span className={st.contact__number}>+ 7 (812) 500-09-10</span>
          </div>
          <div className={st.contact__time}>
            <div>
              <FaRegClock />
            </div>
            <div>Круглосуточно и без выходных</div>
          </div>
        </div>
        <div className={st.navbar__press}>
          <div className={st.button__whatsapp}>
            <RiWhatsappFill size={26} />
          </div>
          <div>
            <button className={st.navbar__button}>Оставить заявку</button>
          </div>
        </div>
      </div>
    </div>
  );
};
