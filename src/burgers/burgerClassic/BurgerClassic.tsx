import { FC } from "react";
import "../base.css";
import "./styles.css";

export const BurgerClassic: FC<BurgerProps> = ({ isClosed }) => (
  <span className={`burger ${isClosed && "is-closed"}`} />
);
