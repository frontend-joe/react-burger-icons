import {
  BurgerRotate,
  BurgerArrow,
  BurgerClose,
  BurgerSwipe,
  BurgerVeggie,
  BurgerSexy,
} from "./library";
import "./App.css";
import { useEffect, useState } from "react";

const burgers = [
  { name: "Rotate", Burger: BurgerRotate },
  { name: "Arrow", Burger: BurgerArrow },
  { name: "Close", Burger: BurgerClose },
  { name: "Swipe", Burger: BurgerSwipe },
  { name: "Veggie", Burger: BurgerVeggie },
  { name: "Sexy", Burger: BurgerSexy },
];

function App() {
  const [isClosedList, setIsClosedList] = useState<boolean[]>([]);

  const handleBurgerClicked = (index: number) => {
    const isClosedListCopy = [...isClosedList];
    isClosedListCopy[index] = !isClosedListCopy[index];
    setIsClosedList(isClosedListCopy);
  };

  useEffect(() => {
    setIsClosedList(burgers.map(() => false));
  }, []);

  return (
    <div className="wrapper">
      {burgers.map(({ name, Burger }, index) => (
        <div className="cell" key={name}>
          <h2 className="cell-title">{name}</h2>
          <button onClick={() => handleBurgerClicked(index)}>
            <Burger isClosed={isClosedList[index]} />
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
