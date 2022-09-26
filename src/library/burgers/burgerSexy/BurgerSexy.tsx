import { FC } from "react";
import "../base.css";
import "./styles.css";

export const BurgerSexy: FC<BurgerProps> = ({ isClosed }) => (
  <span className={`burger burger-sexy ${isClosed && "is-closed"}`} />
);
