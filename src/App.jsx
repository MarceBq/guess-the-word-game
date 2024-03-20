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
  const [showWinAlert, setShowWinAlert] = useState(false);

  const randomTeam = arrSoccerTeam[randomTeamIndex];

  const handleResetGame = () => {
    setResetInputs(true);
    setTimeout(() => {
      setResetInputs(false);
    }, 0);
  };

  const loseGame = () => {
    setShowWinAlert(false);
    setTimeout(() => {
      alert("¡Perdiste!");
      handleResetGame();
      setTries(0);
      setIncorrectLetters([]);
    }, 0);
  };

  const restarGame = () => {
    setShowWinAlert(false);
    handleResetGame();
    setTries(0);
    setIncorrectLetters([]);
  }

  const handleShowWinAlert = (value) => {
    setShowWinAlert(value);
  };

  const handleRandomTeam = () => {
    const newIndex = Math.floor(Math.random() * arrSoccerTeam.length);
    setRandomTeamIndex(newIndex);
    handleResetGame(); // Restablecer el juego al cambiar de equipo
    setTries(0); // Reiniciar el número de intentos
    setIncorrectLetters([]); // Reiniciar las letras incorrectas
  };

  const randomClick = () => {
    handleRandomTeam(); // Llamar a la función para seleccionar un nuevo equipo aleatorio
  };

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
          restartGame={loseGame}
          showAlert={handleShowWinAlert}
        />
      </div>
      <div className="button-container">
        <Button text="Random" onClick={randomClick} />
        <Button text="Reset" onClick={restarGame} />
      </div>
      {showWinAlert && <div className="alert">¡Ganaste!</div>}
    </div>
  );
}

export default App;
