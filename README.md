User Stories

    🐿️ As a user, I want to be able to click the cookie and increment the counter
    🐿️ As a user, I want to see the counter automatically increment using an interval timer
    🐿️ As a user, I want to purchase items i can afford in the shop and increase the number of cookies every time the interval passes

Requirements

🎯 Create state variables to store the current number of cookies and the cookies PerSecond value (useState)

🎯 Set up a timer to increment the number of cookies by the cookiesPerSecond value (useEffect). Be sure to handle clearing the timer using the useEffect return value.

🎯 Set up an array of objects containing the items available for purchase in the store, their cost and their increment increase value. Map through these and create buttons for each.

🎯 Create a function to handle the purchase of an item. This should check if the user has enough cookies to purchase the item, and if so, subtract the cost of the item from the number of cookies and add the increment value to the cookiesPerSecond value.

Stretch Goals

🏹 Store the cookies and cookiesPerSecond values in localStorage so they persist between page refreshes

💭 You can load saved values from localStorage as the default value passed to the useState hook

const [cookies, setCookies] = useState(
parseInt(localStorage.getItem("cookies")) || 0 // parseInt converts the string from local storage to a number
);
const [cookiesPerSecond, setCookiesPerSecond] = useState(
parseInt(localStorage.getItem("cookiesPerSecond")) || 1
);

💭 The useEffect dependency array can be used to trigger a function to save the values to localStorage every time they change

// Store cookies and cookiesPerSecond to local storage
useEffect(() => {
localStorage.setItem("cookies", cookies.toString()); // local storage supports strings so we convert it to a string before saving it
localStorage.setItem("cookiesPerSecond", cookiesPerSecond.toString());
}, [cookies, cookiesPerSecond]);

🏹 Retrieve data to populate your cookie upgrades from a third-party API using fetch and useEffect().
https://cookie-upgrade-api.vercel.app/api/upgrades

I made to keep track the number of items bought in the shop.

I saved the game data in an object like I did in week 3. It was super hard to make it work, but it was worth the hassle, as I learned a lot by doing so. Like I learned how to update the useState if I handle an object, it was very frustrating to make it work as it is completely different from the single value change or an array.

Conditional rendering on buyable items, they show up when only 10% more cookies needed to be able to buy them and they are red until the user have enough cookies to buy them.

## Please also provide an assignment reflection in your project README.md file.(Required)

🎯 Please mention the requirements you met and which goals you achieved for this assignment.

🎯 Were there any requirements or goals that you were not quite able to achieve?

🎯 If so, could you please tell us what was it that you found difficult about these tasks?

(Optional)
🏹 Feel free to add any other reflections you would like to share about your submission e.g.

    What went really well and what could have gone better?

    Detailing useful external sources that helped you complete the assignment (e.g Youtube tutorials).

    Describing errors or bugs you encountered while completing your assignment.
