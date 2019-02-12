import React from 'react';
import './Button.css';



const NumberButton = props => {
    return (
        <div className="number-button">
        {props.number.position}
        </div>
    );
}

export default NumberButton;