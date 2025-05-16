"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import st from "./style.module.css";
import { projectSlides } from "./data";
import { SwBtn } from "../swiperButton";

export const ProjectSlider = () => {
  return (
    <>
      <div className={st.wrapper}>
        <div>
          <div>
            <h1 className={st.title}>Реализованные объекты</h1>
            <p className={st.subtitle}>
              Уже 13 лет мы помогаем нашим партнерам в строительстве объектов
              недвижимости и транспортной инфраструктуры
            </p>
          </div>
        </div>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={3}
          className={st.swiper}
          breakpoints={{
            1024: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
        >
          {projectSlides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div className={st.slide}>
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  width={570}
                  height={320}
                  className={st.image}
                />
                <p className={st.caption}>{slide.caption}</p>
              </div>
            </SwiperSlide>
          ))}

          <div className={st.btn}>
            <SwBtn />
          </div>
        </Swiper>
      </div>
    </>
  );
};
