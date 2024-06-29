import { useState, useEffect } from "react";
import "./App.css";
import ShopItemsDiv from "./components/ShopItemsDiv";
import NumbersDiv from "./components/NumbersDiv";
import ClickerImgDiv from "./components/ClickerImgDiv";
import CheatButtonDiv from "./components/CheatButtonDiv";

function App() {
  // store the number of cookies per second in a object
  const [gameState, setGameState] = useState({
    cookiesCount: 0,
    cookiesPerSecond: 1,
    shopItems: [],
  });

  // I need a timer to track the cookies per second, keeping an eye on the cookies per second value
  // cookiesCount will go up by the number of cookies per second every second
  useEffect(() => {
    // setInterval to increase the number of cookies by the number of cookies per second
    const cookiesInterval = setInterval(() => {
      // Update the number of cookies
      // Different syntax to update the state because I am using objects
      setGameState((prevState) => ({
        ...prevState, // Spread operator to copy all the properties of the object, without this the object will be overwritten and the cookiesPerSecond will be lost
        cookiesCount: prevState.cookiesCount + prevState.cookiesPerSecond,
      }));
    }, 1000);
    // return a function to clear the interval
    return () => clearInterval(cookiesInterval);
  }, [gameState.cookiesPerSecond]); // cookiesPerSecond is a dependency of the useEffect hook and will trigger the useEffect hook every time it changes its value (every time the user buys a shop item)

  return (
    <div>
      {/* Passing the gameState and setGameState as a prop */}
      <NumbersDiv gameState={gameState} />
      <ClickerImgDiv setGameState={setGameState} />
      <ShopItemsDiv gameState={gameState} setGameState={setGameState} />
      <CheatButtonDiv gameState={gameState} setGameState={setGameState} />
    </div>
  );
}

export default App;
