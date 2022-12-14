import { FC } from "react";
import "../base.css";
import "./styles.css";

export const BurgerBoughie: FC<BurgerProps> = ({ isClosed }) => (
  <span className={`burger burger-boughie ${isClosed && "is-closed"}`} />
);
