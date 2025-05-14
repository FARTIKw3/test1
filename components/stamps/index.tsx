import { TbBorderCornerSquare } from "react-icons/tb";
import { stampsData } from "./data";
import st from "./style.module.css";

export const Stamps = () => {
  return (
    <div className={st.container}>
      <div>
        <h1 className={st.title}>Применение марок бетона</h1>
      </div>
      <div className={st.stampsContainer}>
        {stampsData.map((item) => {
          return (
            <div className={st.stamp} key={item.id}>
              <div className={st.stamp__header}>
                <div className={st.stamp__title}>
                  <h2>{item.name}</h2>
                </div>
                <div className={st.stamp__corner}>
                  <TbBorderCornerSquare size={22} />
                </div>
              </div>
              <div>
                <span className={st.stamp__span}>{item.type}</span>
              </div>
              <div>
                <p className={st.stamp__paragh}>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
