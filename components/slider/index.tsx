"use client";
import Image from "next/image";
import { useState } from "react";
import st from "./style.module.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const slides = ["/factory.jpg", "/cement.jpg", "/factory.jpg"];

export const Slider = () => {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={st.slider}>
      <div className={st.slider__item}>
        <Image
          src={slides[index]}
          alt={`slide-${index}`}
          fill
          className={st.image}
        />
      </div>
      <button className={st.prevBtn} onClick={prevSlide} aria-label="prev">
        <FaArrowLeft size={22} />
      </button>
      <button className={st.nextBtn} onClick={nextSlide} aria-label="next">
        <FaArrowRight size={22} />
      </button>
    </div>
  );
};
