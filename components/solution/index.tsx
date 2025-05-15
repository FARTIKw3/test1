import { SolutionCard } from "../solutionCard";
import { solutionData } from "../solutionCard/data";
import st from "./style.module.css";

export const Solution = () => {
  return (
    <div className={st.container}>
      <h1 className={st.title}>Раствор цементный</h1>
      <div className={st.solutionContainer}>
        {solutionData.map((item, index) => (
          <SolutionCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};
