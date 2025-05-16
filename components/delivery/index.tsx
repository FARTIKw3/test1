import st from "./style.module.css";

export const Delivery = () => {
  return (
    <div className={st.container}>
      <div className={st.card}>
        <div>
          <h1 className={st.card__title}>Доставим точно в срок</h1>
        </div>
        <div className={st.card__container}>
          <ul className={st.card__list}>
            <li>
              Парк состоит из 12 машин объемом от 7 до 13 м3, при необходимости
              нанимаем дополнительный транспорт
            </li>
            <li>Общая производительность заводов 340м3 в час</li>
            <li>
              Удобное расположение заводов позволяет осуществлять бесперебойную
              поставку вне зависимости от объема
            </li>
            <li>Наличие полного пакета документов у водителя</li>
            <li>Закрывающие документы предоставляются на следующий день</li>
          </ul>
        </div>
        <button className={st.card__button}>
          Рассчитать стоимость доставки
        </button>
      </div>
    </div>
  );
};
