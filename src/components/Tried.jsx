import PropTypes from 'prop-types';

export default function Tried({ tries }) {
  // Calcula el número de bolitas pintadas
  const paintedBullets = tries > 5 ? 5 : tries; // Limita el máximo de bolitas pintadas a 5

  // Genera las bolitas pintadas y no pintadas
  const bullets = Array(5).fill('').map((_, index) => {
    const isPainted = index < paintedBullets;
    return <div key={index} className={`tried-point ${isPainted ? 'painted' : ''}`} />;
  });

  return (
    <div className="tried-container">
      <h3>Tries: {tries}/5</h3>
      <div className="tried-points-container">
        {bullets}
      </div>
    </div>
  );
}

Tried.propTypes = {
  tries: PropTypes.number.isRequired
};
