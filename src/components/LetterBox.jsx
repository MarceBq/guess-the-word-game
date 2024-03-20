import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

export default function LetterBox({ team, tries, setTries, setIncorrectLetters, resetInputs, restartGame }) {
  const newTeamWhSpace = team.replace(/\s/g, "");
  const arrayLetters = newTeamWhSpace.split("");

  const [inputValues, setInputValues] = useState(Array(arrayLetters.length).fill(""));
  const [expectedLetter, setExpectedLetter] = useState("");
  const [currentLetter, setCurrentLetter] = useState("");
  const firstInputRef = useRef(null); // Referencia al primer input

  useEffect(() => {
    // Reiniciar los valores de los inputs cuando se llame la función resetInputs
    setInputValues(Array(arrayLetters.length).fill(""));
    if (firstInputRef.current) {
      firstInputRef.current.focus(); // Enfocar el primer input
    }
  }, [resetInputs, arrayLetters.length]);

  useEffect(() => {
    if (tries === 5) {
      restartGame(); // Llama a la función para reiniciar el juego cuando se alcancen los 5 intentos
    }
  }, [tries, restartGame]);

  const handleInputChange = (index, event) => {
    const value = event.target.value.toLowerCase();
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);
    setCurrentLetter(value);
    setExpectedLetter(arrayLetters[index]);
    
    if (value === arrayLetters[index]) {
      if (index < arrayLetters.length - 1) {
        const nextInput = event.target.parentElement.nextElementSibling.querySelector("input");
        if (nextInput) {
          nextInput.focus();
        }
      }else{
        setTimeout(() => {
          alert("You win");
        },0)
      }
    } else if (value !== "") {
      setTries(tries + 1);
      setIncorrectLetters((prevIncorrectLetters) => [...prevIncorrectLetters, value]);
    }
  };

  const letterBoxes = arrayLetters.map((letter, index) => (
    <div className="letter-box" key={index}>
      <input
        ref={index === 0 ? firstInputRef : null} // Asigna la referencia al primer input
        className={`input${index}${letter}`}
        type="text"
        maxLength="1"
        value={inputValues[index]}
        onChange={(event) => handleInputChange(index, event)}
      />
    </div>
  ));

  return <div className="letter-box-container">{letterBoxes}</div>;
}

LetterBox.propTypes = {
  team: PropTypes.string.isRequired,
  tries: PropTypes.number.isRequired,
  setTries: PropTypes.func.isRequired,
  setIncorrectLetters: PropTypes.func.isRequired,
  resetInputs: PropTypes.bool.isRequired,  
  restartGame: PropTypes.func.isRequired,  
};
