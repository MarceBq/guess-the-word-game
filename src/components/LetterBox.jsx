import { useState } from "react";
import PropTypes from "prop-types";

export default function LetterBox(props) {
  const { team } = props;

  const newTeamWhSpace = team.replace(/\s/g, "");
  const arrayLetters = newTeamWhSpace.split("");

  const [inputValues, setInputValues] = useState(arrayLetters.map(() => ""));

  // Función para manejar el cambio en el input
  const handleInputChange = (index, event) => {
    // Valor ingresado en el input
    const value = event.target.value.toLowerCase();

    // Crear una copia del arreglo de valores de inputs actual para mantener inmutabilidad del estado en React
    const newInputValues = [...inputValues];

    // Actualizar el valor correspondiente al input actual
    newInputValues[index] = value;

    // Actualizar el estado con los nuevos valores de los inputs
    setInputValues(newInputValues);

    // Verifica si el valor ingresado coincide con la letra correspondiente en el array
    if (value === arrayLetters[index]) {
      // Si coincide, enfocará al siguiente input si este existe
      if (index < arrayLetters.length - 1) {
        const nextInput =
          event.target.parentElement.nextElementSibling.querySelector("input");
        if (nextInput) {
          nextInput.focus();
        }
      }
    }     
  };

  const letterBoxes = arrayLetters.map((e, index) => (
    <div className="letter-box" key={index}>
      <input
        className={`input${index}${e}`}
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
  team: PropTypes.string.isRequired
};
