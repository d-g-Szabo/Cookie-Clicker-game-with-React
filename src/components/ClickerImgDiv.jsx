import "./ClickerImgDiv.css";
import reactLogo from "../assets/react.svg"; // todo change the logo

export default function ClickerImgDiv({ setGameState }) {
  return (
    <div className="clicker-img-container">
      <img
        src={reactLogo}
        className="logo react"
        alt="React logo"
        onClick={() =>
          setGameState((prevState) => ({
            ...prevState,
            cookiesCount: prevState.cookiesCount + 1,
          }))
        }
      />
    </div>
  );
}
