import { BurgerClassic } from "./burgers/burgerClassic";
import "./App.css";
import { useEffect, useState } from "react";

const burgers = [
  BurgerClassic,
  BurgerClassic,
  BurgerClassic,
  BurgerClassic,
  BurgerClassic,
  BurgerClassic,
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
      {burgers.map((Burger, index) => (
        <div className="cell">
          <button onClick={() => handleBurgerClicked(index)}>
            <Burger isClosed={isClosedList[index]} />
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
