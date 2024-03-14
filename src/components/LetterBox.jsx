/* eslint-disable react/prop-types */
export default function LetterBox(props) {
  
  const { team } = props;

  const newTeamWhSpace = team.replace(/\s/g, '');

  const letterBoxes = [];

  for (let i = 0; i < newTeamWhSpace.length; i++) {
    letterBoxes.push(
    <div className="letter-box">
      <input type="text" maxLength="1" />
    </div>);
  }

  return (
    <div className="letter-box-container">
      {letterBoxes}
    </div>
  );
}

