import "./NumbersDiv.css";
export default function NumbersDiv({ gameState }) {
  // Passing the gameState as a prop
  return (
    <div className="numbers-container">
      <p>Cookies:</p>
      <p>{gameState.cookiesCount}</p>
      <p>CPS: </p>
      <p>{gameState.cookiesPerSecond}</p>
    </div>
  );
}
