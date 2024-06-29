export default function CheatButtonDiv({ setGameState }) {
  function reset() {
    setGameState(() => ({
      cookiesCount: 0, // Subtract the cost of the item from the number of cookies
      cookiesPerSecond: 1, // Increase the number of CPS by the increase of the item
      shopItems: [],
    }));
  }
  return (
    <div className="reset-button-container">
      <button
        className="reset-button"
        onClick={() => {
          reset();
        }}
      >
        Reset
      </button>
    </div>
  );
}
