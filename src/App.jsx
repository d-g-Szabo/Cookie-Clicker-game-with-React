import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  // Shop items for users to buy
  // Shop items change the number of cookies per second and decrease the number of cookies
  // fetch API to get the shop items
  const upgradeShopItems = async () => {
    const response = await fetch(
      "https://cookie-clicker-api.herokuapp.com/shop"
    );
    const data = await response.json();
    console.log(data);
  };

  // global variables to store the number of cookies and the number of cookies per second
  const [cookiesCount, setCookiesCount] = useState(0);
  const [cookiesPerSecond, setCookiesPerSecond] = useState(0);

  // I need a timer to track the cookies per second, keeping an eye on the cookies per second value
  // cookiesCount will go up by the number of cookies per second every second
  useEffect(() => {
    // setInterval to increase the number of cookies by the number of cookies per second
    const cookiesInterval = setInterval(() => {
      setCookiesCount((currentCookies) => currentCookies + cookiesPerSecond);
    }, 1000);
    // return a function to clear the interval
    return () => clearInterval(cookiesInterval);
  }, [cookiesPerSecond]); // cookiesPerSecond is a dependency of the useEffect hook and will trigger the useEffect hook every time it changes its value (every time the user buys a shop item)

  // Function to buy a shop item
  const buyShopItem = async (shopItemId) => {
    const response = await fetch(
      `https://cookie-clicker-api.herokuapp.com/shop/${shopItemId}`,
      {
        method: "POST",
      }
    );
    const data = await response.json();
    console.log(data);
    // update the number of cookies and the number of cookies per second
    setCookiesCount(data.cookies);
    setCookiesPerSecond(data.cookiesPerSecond);
  };

  return (
    <>
      <div>
        <p>Cookies: {cookiesCount}</p>
        <p>Cookies per second: {cookiesPerSecond}</p>
        <img
          src={reactLogo}
          className="logo react"
          alt="React logo"
          onClick={() => setCookiesCount((count) => count + 1)}
        />
        {/* a list of shop items that the user can buy (extra: add a visual feedback when the user can afford a shop item) */}
      </div>
    </>
  );
}

export default App;
