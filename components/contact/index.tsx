import { MdLocalPhone } from "react-icons/md";
import st from "./style.module.css";
import { FaMapMarkerAlt } from "react-icons/fa";

export const Contact = () => {
  return (
    <div className={st.container}>
      <h1 className={st.title}>Контакты</h1>
      <div className={st.contact__container}>
        <div className={st.number}>
          <div className={st.number__container}>
            <div>
              <MdLocalPhone size={32} color="red" />
            </div>
            <div>
              <h2 className={st.number__title}>Телефоны</h2>
            </div>
          </div>
          <div className={st.top}>
            <span className={st.number__span}>+7 (812) 500-09-10</span>
          </div>
          <div>
            <span className={st.number__span}>+7 (992) 777-27-17</span>
          </div>
          <span className={st.span}>Руководитель отдела продаж</span>
        </div>
        <div className={st.street}>
          <div className={st.street__container}>
            <div>
              <FaMapMarkerAlt size={32} color="red" />
            </div>
            <div>
              <h2 className={st.street__title}>Адреса заводов</h2>
            </div>
          </div>
          <ul className={st.street__list}>
            <li>п. Фёдоровское, ул. Почтовая 36</li>
            <li>д. Новосергиевка, Дельтовский пр. 1</li>
            <li>Санкт-Петербург, ул. Торговая (Мега-Парнас)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
