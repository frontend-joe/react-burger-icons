import { FC } from "react";
import { BurgerProps } from "../../dist";
import "../base.css";
import "./styles.css";

export const BurgerClose: FC<BurgerProps> = ({ isClosed }) => (
  <span className={`burger burger-close ${isClosed && "is-closed"}`} />
);
