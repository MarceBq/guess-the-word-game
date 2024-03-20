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

  return (
    <div className="guess-container">
      <h1>{messUpCharacters(newTeamWhSpace)}</h1>
    </div>
  );
}

GuessWord.propTypes = {
  team: PropTypes.string.isRequired,
};
