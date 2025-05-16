import { useSwiper } from "swiper/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import st from "./style.module.css";

export const SwBtn = () => {
  const swiper = useSwiper();
  return (
    <>
      <div className={st.container}>
        <button
          onClick={() => swiper.slidePrev()}
          className={st.btn}
          aria-label="prev"
        >
          <FaArrowLeft size={22} />
        </button>
        <button
          onClick={() => swiper.slideNext()}
          className={st.btn}
          aria-label="next"
        >
          <FaArrowRight size={22} />
        </button>
      </div>
    </>
  );
};
