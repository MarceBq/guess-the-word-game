import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const messUpCharacters = (character) => {
  return character
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");
};

export default function GuessWord(props) {
  const { team } = props;
  const newTeamWhSpace = team.replace(/\s/g, "");

  // Utilizamos useState para almacenar la palabra desordenada
  const [scrambledWord, setScrambledWord] = useState("");

  // Utilizamos useEffect para generar la palabra desordenada solo una vez, cuando el componente se monta
  useEffect(() => {
    setScrambledWord(messUpCharacters(newTeamWhSpace));
  }, [newTeamWhSpace]); 

  return (
    <div className="guess-container">
      <h1>{scrambledWord}</h1>
    </div>
  );
}

GuessWord.propTypes = {
  team: PropTypes.string.isRequired,
};
