import PropTypes from 'prop-types';

export default function Tried() {
       
    return(
        <div className="tried-container">
            
            <h3>Tries(0/5): </h3>
            <div className="tried-point"></div>
            <div className="tried-point"></div>
            <div className="tried-point"></div>
            <div className="tried-point"></div>
            <div className="tried-point"></div>
        </div>
    )
}

Tried.propTypes = {
    errors: PropTypes.number.isRequired
};