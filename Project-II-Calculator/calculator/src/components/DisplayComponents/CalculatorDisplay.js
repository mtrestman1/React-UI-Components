import React from 'react';
import './Display.css';

import NumberButton from '../ButtonComponents/NumberButton'

const numbers = [
{
    position: 7
},
{
    position: 8
},
{
    position: 9
},
{
    position: 4
},
{
    position: 5
},
{
    position: 6
},
{
    position: 1
},
{
    position: 2
},
{
    position: 3
},

];
 

function CalculatorDisplay() {
    return (
        <div className="calculator">
            <header className="answer-bar">0</header>
            <p className="clear-bar">clear</p>
            <div className="numbers">
                {numbers.map(number => {
                    return(
                        <NumberButton number={number}/>
                    )
                })}
            </div>
            <p className="zero">0</p>
        </div>
    );
}



export default CalculatorDisplay;