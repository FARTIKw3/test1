import st from "./style.module.css";

export const Map = () => {
  return (
    <div className={st.container}>
      <iframe
        width="100%"
        height="440"
        className={st.map}
        scrolling="no"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>
    </div>
  );
};
