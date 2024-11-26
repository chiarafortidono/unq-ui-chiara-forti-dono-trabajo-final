import React from "react";
import "./Card.css";

const Card = ({ id, src, flipped }) => {

    return (
        <div className="card">
            <img 
                src={flipped ? src : "/logo.png"}
                className={'card-image' + (flipped ? ' flipped' : '')}
            />
        </div>
    );
};

export default Card;