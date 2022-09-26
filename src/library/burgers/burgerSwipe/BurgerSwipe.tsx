import { FC } from "react";
import { BurgerProps } from "../../dist";
import "../base.css";
import "./styles.css";

export const BurgerSwipe: FC<BurgerProps> = ({ isClosed }) => (
  <span className={`burger burger-swipe ${isClosed && "is-closed"}`} />
);
