import st from "./style.module.css";

export const Footer = () => {
  return (
    <div className={st.container}>
      <div className={st.footer}>
        <div>
          <span className={st.footer__span__gray}>
            ООО «АмСтрой Бетон». 2024
          </span>
        </div>
        <div>
          <span className={st.footer__span}>
            Политика в отношении обработки персональных данных
          </span>
        </div>
        <div>
          <span className={st.footer__span}>Вакансии</span>
        </div>
      </div>
    </div>
  );
};
