import Image from "next/image";
import st from "./style.module.css";
import { FaPlus } from "react-icons/fa6";
import { TbBorderCornerSquare } from "react-icons/tb";

export const Products = () => {
  return (
    <>
      <div className={st.container}>
        <h1 className={st.title}>Продукция</h1>
        <div className={st.products}>
          <div className={st.card}>
            <div>
              <div className={st.card__image}>
                <Image
                  src="/beton.jpg"
                  width={380}
                  height={325}
                  alt="beton"
                  className={st.image}
                />
              </div>
            </div>
            <button className={st.card__button} title="Добавить в корзину">
              <FaPlus size={22} />
            </button>
            <div className={st.card__press}>
              <div>
                <h2 className={st.card__title}>Бетон товарный</h2>
              </div>
              <div className={st.card__corner}>
                <TbBorderCornerSquare size={22} />
              </div>
            </div>
          </div>
          <div className={st.card}>
            <div>
              <div className={st.card__image}>
                <Image
                  src="/cement.jpg"
                  width={380}
                  height={325}
                  alt="beton"
                  className={st.image}
                />
              </div>
            </div>
            <button className={st.card__button} title="Добавить в корзину">
              <FaPlus size={22} />
            </button>
            <div className={st.card__press}>
              <div>
                <h2 className={st.card__title}>Бетон товарный</h2>
              </div>
              <div className={st.card__corner}>
                <TbBorderCornerSquare size={22} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
