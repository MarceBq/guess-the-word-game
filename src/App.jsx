import React, { useState } from "react";
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

  const [randomTeamIndex, setRandomTeamIndex] = useState(
    Math.floor(Math.random() * arrSoccerTeam.length)
  );

  const [incorrectLetters, setIncorrectLetters] = useState([]);

  const [resetInputs, setResetInputs] = useState(false);

  const randomTeam = arrSoccerTeam[randomTeamIndex];

  const hR = () => {
    setResetInputs(true);
    setTimeout(() => {
      setResetInputs(false);
    }, 0);
  };

  const restartGame = () => {
    setTimeout(() => {
      alert("you lose");
      hR();
      setTries(0);
      setIncorrectLetters([]);
    }, 0);
  };

  const randomClick = () => {
    alert("Random");
  };

  const resetClick = () => {
    restartGame();
  };

  // Paso como props
  const [tries, setTries] = useState(0);

  return (
    <div className="game-container">
      <img src={LogoGame} alt="logo guess game" />
      <GuessWord team={randomTeam} />
      <div className="counter-container">
        <Tried tries={tries} />
        <Mistake incorrectLetters={incorrectLetters} />
      </div>
      <div className="memory-words-container">
        <LetterBox
          team={randomTeam}
          tries={tries}
          setTries={setTries}
          setIncorrectLetters={setIncorrectLetters}
          resetInputs={resetInputs}
        />
      </div>
      <div className="button-container">
        <Button text="Random" onClick={randomClick} />
        <Button text="Reset" onClick={restartGame} />
      </div>
      {tries === 5 ? restartGame() : null}
    </div>
  );
}

export default App;
