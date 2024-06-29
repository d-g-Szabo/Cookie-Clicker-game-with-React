export default function CheatButtonDiv({ gameState, setGameState }) {
  function cheat() {
    const cookiesCount = gameState.cookiesCount + 1000000;
    setGameState((prevState) => ({ ...prevState, cookiesCount }));
  }
  return (
    <div className="cheat-button-container">
      <button
        className="cheat-button"
        onClick={() => {
          cheat();
        }}
      >
        Cheat
      </button>
    </div>
  );
}
