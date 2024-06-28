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
    setGameState((prevState) => ({
      ...prevState,
      cookiesCount: prevState.cookiesCount - itemCost, // Subtract the cost of the item from the number of cookies
      cookiesPerSecond: prevState.cookiesPerSecond + increase, // Increase the number of cookies per second
      shopItems: [
        // Check if the user already bought the item
        // If the user already bought the item, increase the number of items
        // If the user didn't buy the item, add the item to the shopItems array
        prevState.shopItems.find((item) => item.id === id) // find() function to check if the user already bought the item // todo not saving correctly
          ? prevState.shopItems.map((item) => {
              // map() function to loop through the shopItems array
              if (item.id === id) {
                // If the Id of the item is equal to the id of the item the user wants to buy
                item.ammount += 1; // Increase the number of items
                // return { id: id, ammount: item.ammount + 1 }; // Increase the number of items
              }
              //   return item;
            })
          : [...prevState.shopItems, { id: id, ammount: 1 }], // If the user didn't buy the item, add the item to the shopItems array
      ],
    }));
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
