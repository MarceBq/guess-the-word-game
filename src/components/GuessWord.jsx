/* eslint-disable react/prop-types */
export default function GuessWord(props) {
  const messUpCharacters = (character) => {
    return character
      .split("")
      .sort(() => Math.random() - 0.5)
      .join("");
  };

  const { team } = props;
  const newTeamWhSpace = team.replace(/\s/g, "");

  console.log(team);

  return (
    <div className="guess-container">
      <h1>{messUpCharacters(newTeamWhSpace)}</h1>
    </div>
  );
}
