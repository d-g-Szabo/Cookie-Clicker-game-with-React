import fetchShopItems from "./fetchShopItems";
import "./ShopItemsDiv.css";
import { useState, useEffect } from "react";

// Shop items for users to buy
// Shop items change the number of cookies per second and decrease the number of cookies
// fetch API to get the shop items

export default function ShopItemsDiv({ gameState, setGameState }) {
  // useState to store the shop items
  const [shopItems, setShopItems] = useState([]);
  console.log(gameState);
  // useEffect to fetch the shop items
  // In react if we need async and await code in we need to use useEffect as it runs asynchronously
  useEffect(() => {
    // Create an async function to fetch the shop items, again we need the async keyword because we are using await
    const getShopItems = async () => {
      // Call the fetchShopItems function and store the result in the shopItems state
      setShopItems(await fetchShopItems());
    };
    // Call the getShopItems function
    getShopItems();
    // The dependency array is empty, so the useEffect hook will run only once when the component mounts
  }, []);

  const buyShopItem = (itemCost, increase, id) => {
    // Check if the user has enough cookies to buy the item
    if (gameState.cookiesCount < itemCost) {
      alert("Not enough cookies to buy this item");
      return;
    }
    setGameState((prevState) => {
      const itemIndex = prevState.shopItems.findIndex((item) => item.id === id); // findIndex() function to find the index of the item in the shopItems array if it exists or -1 if it doesn't
      let newShopItems = [...prevState.shopItems]; // Copy the shopItems array to a new array so I can add it as a new property in the new state

      if (itemIndex >= 0) {
        // Item exists, update its amount
        newShopItems[itemIndex] = {
          ...newShopItems[itemIndex], // Copy the previus item object to keep the id
          amount: newShopItems[itemIndex].amount + 1, // Increase the amount of the item by 1
        };
      } else {
        // Item doesn't exist, add new item
        newShopItems.push({ id: id, amount: 1 });
      }

      return {
        ...prevState, //Spread operator to copy the old data
        cookiesCount: prevState.cookiesCount - itemCost, // Subtract the cost of the item from the number of cookies
        cookiesPerSecond: prevState.cookiesPerSecond + increase, // Increase the number of CPS by the increase of the item
        shopItems: newShopItems, // Make the shopItems array equal to the newShopItems array
      };
    });
  };

  return (
    <>
      <div className="shop-items-container">
        <p>Shop Items</p>
        {/* map() function to loop through the shopItems array and display them */}
        {shopItems.map((item) => (
          <div className="item" key={item.id}>
            <p>{item.name}</p>
            <p>Cost: {item.cost}</p>
            <p>CPS: {item.increase}</p>
            <button
              onClick={() => buyShopItem(item.cost, item.increase, item.id)}
            >
              Buy
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
