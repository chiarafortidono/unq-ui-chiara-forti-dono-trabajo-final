import React from "react";
import "./Card.css";

const Card = ({ card, handleChoice, flipped, disabled }) => {

    const handleClick = () => {
        if (!disabled) {
            handleChoice(card);
        }
    };

    return (
        <div className="card">
            <div className={flipped ? "flipped" : ""}>
                <img 
                    className="card-front" 
                    src={card.src}/>
                <img 
                    className="card-back" 
                    src="/logo.png" 
                    onClick={handleClick}/>
            </div>
        </div>
    );
};

export default Card;
