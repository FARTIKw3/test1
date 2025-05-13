"use client";

import { useState } from "react";
import { Navigation } from "../navigation";
import st from "./style.module.css";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(!isOpen);

  return (
    <div className={st.container} onClick={close}>
      <Navigation isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};
