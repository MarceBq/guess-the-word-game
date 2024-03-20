import LogoGame from "./assets/Word-Scramblle.svg";
import GuessWord from "./components/GuessWord";
import Tried from "./components/Tried";
import Mistake from "./components/Mistake";
import LetterBox from "./components/LetterBox";
import Button from "./components/Button";

import "./App.css";

function App() {
  const arrSoccerTeam = [
    "real madrid",
    "barcelona",
    "liverpool",
    "juventus",
    "ac milan",
  ];

  // Obtain a random team
  const ramdonIndex = arrSoccerTeam[Math.floor(Math.random() * arrSoccerTeam.length)];

  // Events to buttons
  const ramdonClick = () => {
    alert("Ramdon");
  };

  const resetClick = () => {
    alert("Reset");
  };

  return (
    <div className="game-container">
      <img src={LogoGame} alt="logo guess game" />
      <GuessWord team={ramdonIndex} />
      <div className="counter-container">
        <Tried />
        <Mistake />
      </div>
      <div className="memory-words-container">
        <LetterBox team={ramdonIndex} />
      </div>
      <div className="button-container">
        <Button text="Ramdon" onClick={ramdonClick} />
        <Button text="Reset" onClick={resetClick} />
      </div>
    </div>
  );
}

export default App;
