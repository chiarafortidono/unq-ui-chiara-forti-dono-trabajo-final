import React from "react";
import Card from "./Card";
import { useEffect, useState } from 'react';
import './Board.css';

const Board = ({size, players, cards}) => {
    const [firstChoice, setFirstChoice] = useState(null);
    const [secondChoice, setSecondChoice] = useState(null);
    const [disabled, setDisabled] = useState(false);

    const handleChoice = (card) => {
      firstChoice ? setSecondChoice(card) : setFirstChoice(card);
    };

    const updateMatchedCards = () => {
      setCards(prevCards => {
        return prevCards.map(card => {
          if (card.src === firstChoice.src) {
            return {...card, matched: true};
          } else {
            return card;
          }
        })
      });
    };

    useEffect(() => {
      if (firstChoice && secondChoice) {
        setDisabled(true);
        if (firstChoice.src === secondChoice.src) {
          updateMatchedCards();
          resetChoices();
        } else {
          setTimeout(() => resetChoices(), 500);
        }
      }
    }, [firstChoice, secondChoice]);

    const resetChoices = () => {
      setFirstChoice(null);
      setSecondChoice(null);
      setDisabled(false);
    };
    
    return (
      <div>
          <div className='board-grid-container'>
            <div className='board-grid-18'>
                {cards.map(card => (
                    <Card 
                      key={card.id} 
                      card={card}
                      handleChoice={handleChoice}  
                      flipped={card === firstChoice || card === secondChoice || card.matched}
                      disabled={disabled}
                    />
                ))}
            </div>
          </div>
      </div>
    )
};

export default Board;