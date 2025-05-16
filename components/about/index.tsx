import Image from "next/image";
import { aboutData } from "./data";
import st from "./style.module.css";

export const About = () => {
  return (
    <div className={st.container}>
      <div>
        <h1 className={st.title}>О компании</h1>
        <p className={st.paragh}>
          Компания ООО «АмСтрой» – крупный производитель бетонных смесей и ЖБИ
          на территории Санкт-Петербурга и Ленинградской области
        </p>
      </div>
      <div className={st.about}>
        <div className={st.about__cards}>
          {aboutData.map((item, index) => (
            <div className={st.about__card} key={index}>
              <div className={st.about__header}>
                <div>
                  <h1 className={st.about__title}>{item.title}</h1>
                </div>
                <div>
                  <Image
                    src={item.svg}
                    width={100}
                    height={100}
                    alt={item.alt}
                  />
                </div>
              </div>
              <div className={st.about__text}>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
