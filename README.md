# week06-assignment

Project: Build a Cookie Clicker Game with React!

# Requirements:

🎯 Create state variables to store the current number of cookies and the cookies PerSecond value (useState)

🎯 Set up a timer to increment the number of cookies by the cookiesPerSecond value (useEffect). Be sure to handle clearing the timer using the useEffect return value.

🎯 Set up an array of objects containing the items available for purchase in the store, their cost and their increment increase value. Map through these and create buttons for each.

🎯 Create a function to handle the purchase of an item. This should check if the user has enough cookies to purchase the item, and if so, subtract the cost of the item from the number of cookies and add the increment value to the cookiesPerSecond value.

I met all the requirements for this assignment.

# User Stories:

    🐿️ As a user, I want to be able to click the cookie and increment the counter
    🐿️ As a user, I want to see the counter automatically increment using an interval timer
    🐿️ As a user, I want to purchase items I can afford in the shop and increase the number of cookies every time the interval passes

# Wireframe:

![](https://d-g-szabo.github.io/Cookie-Clicker-game-with-React/blob/main/public/cookies_clicker_react_wireframe.jpg)

# Component flow:

![](https://d-g-szabo.github.io/Cookie-Clicker-game-with-React/blob/main/public/cookie_clicker_react_.jpg)

# Stretch Goals:

🏹 Store the cookies and cookiesPerSecond values in localStorage so they persist between page refreshes

🏹 Retrieve data to populate your cookie upgrades from a third-party API using fetch and useEffect().
https://cookie-upgrade-api.vercel.app/api/upgrades

🏹 I made to keep track the number of items bought in the shop.

🏹 I saved the game data in an object.

🏹 Conditional rendering on buyable items: they show up when only 10% more cookies are needed to be able to buy them, and they are red until the user has enough cookies to buy them.

# Reflections:

What went really well and what could have gone better?

Using React to make this project work was much easier than doing it in regular JS.

Useful external sources:

- https://blog.logrocket.com/using-react-usestate-object/
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex

Describing errors or bugs you encountered:

I saved the game data in an object like I did in week 3. It was super hard to make it work, but it was worth the hassle, as I learned a lot by doing so. Like I learned how to update the useState if I handle an object, it was very frustrating to make it work as it is completely different from the single value change or an array.

Requesting feedback about a specific part of your submission:

Does my component tree make sense, or is there anything else I could have done to improve it?
