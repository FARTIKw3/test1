import st from "./style.module.css";

export const Logo = () => {
  return (
    <div className={st.logo}>
      <h1 className={st.logo__title}>
        <span className={st.logo__span}>Ам</span>Строй Бетон
      </h1>
    </div>
  );
};
