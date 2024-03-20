import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function LetterBox({ team, tries, setTries, setIncorrectLetters, resetInputs }) {

  const newTeamWhSpace = team.replace(/\s/g, "");
  const arrayLetters = newTeamWhSpace.split("");

  const [inputValues, setInputValues] = useState(Array(arrayLetters.length).fill(""));
  const [expectedLetter, setExpectedLetter] = useState("");
  const [currentLetter, setCurrentLetter] = useState("");
  
  useEffect(() => {
    setInputValues(Array(arrayLetters.length).fill(""));
  },[resetInputs, arrayLetters.length]);

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
      }
    } else if (value !== "") { 
      setTries(tries + 1); 
      setIncorrectLetters((prevIncorrectLetters) => [...prevIncorrectLetters, value]);
    }
  };

  const letterBoxes = arrayLetters.map((letter, index) => (
    <div className="letter-box" key={index}>
      <input
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
};
