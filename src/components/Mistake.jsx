import PropTypes from 'prop-types';

export default function Mistake({incorrectLetters}) {

    return(
        <div className="mistake-container">
            <h3>Mistake: {incorrectLetters.join(", ")}</h3>
        </div>
        
    )
}

Mistake.propTypes = {
    incorrectLetters: PropTypes.array.isRequired
};