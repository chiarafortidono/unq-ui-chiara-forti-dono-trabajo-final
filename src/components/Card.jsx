import React from "react";
import "./Card.css";

const Card = ({ card, handleChoice }) => {

    const handleClick = () => {
        handleChoice(card);
    };

    return (
        <div className="card">
            <img 
                className="card-front" 
                src={card.src}/>
            <img 
                className="card-back" 
                src="/logo.png" 
                onClick={handleClick}/>
        </div>
    );
};

export default Card;