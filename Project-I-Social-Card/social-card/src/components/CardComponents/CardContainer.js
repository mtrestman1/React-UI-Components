import React from 'react';
import './Card.css';

import CardBanner from './CardBanner';
import CardContent from './CardContent';


function CardContainer() {
    return (
        <div class="container">
        <a href="https://www.reactjs.org" target="_blank">
    <div className="Card-Container">

    <CardBanner />
    <CardContent />
    
    </div>
    </a>
    </div>
    );
 }
 
 
 export default CardContainer;