import { FC } from "react";
import "../base.css";
import "./styles.css";

export const BurgerClose: FC<BurgerProps> = ({ isClosed }) => (
  <span className={`burger burger-close ${isClosed && "is-closed"}`} />
);
