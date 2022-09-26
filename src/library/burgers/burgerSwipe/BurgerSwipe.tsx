import { FC } from "react";
import "../base.css";
import "./styles.css";

export const BurgerSwipe: FC<BurgerProps> = ({ isClosed }) => (
  <span className={`burger burger-swipe ${isClosed && "is-closed"}`} />
);
