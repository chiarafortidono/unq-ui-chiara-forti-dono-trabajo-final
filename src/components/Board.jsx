import React from "react";
import Card from "./Card";
import { useEffect, useState } from 'react';
import './Board.css';

const Board = ({cards, style, onRestart}) => {
    const [firstChoice, setFirstChoice] = useState(null);
    const [secondChoice, setSecondChoice] = useState(null);
    const [disabled, setDisabled] = useState(false);
    const [pairs, setPairs] = useState(cards);
    const [win, setWin] = useState(false);

    const handleChoice = (card) => {
      firstChoice ? setSecondChoice(card) : setFirstChoice(card);
    };

    const updateMatchedCards = () => {
      setPairs(prevPairs => {
        return prevPairs.map(card => {
          if (card.src === firstChoice.src) {
            return {...card, matched: true};
          } else {
            return card;
          }
        })
      })
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

    useEffect(() => {
      if (pairs.every((card) => card.matched)) {
        setTimeout(() => setWin(true), 700);
      }
    }, [pairs]);

    const resetChoices = () => {
      setFirstChoice(null);
      setSecondChoice(null);
      setDisabled(false);
    };
    
    return (
      <div>
        {win ? (
          <div className='win-container'>
              <img src='/memotest.png'/>
              <h2>You won! 🎉</h2>
              <button onClick={onRestart}>Play Again</button>
          </div>
        ) : (
          <div className='board-grid-container'>
          <div className={style}>
              {pairs.map(card => (
                  <Card 
                    key={card.id} 
                    card={card}
                    handleChoice={handleChoice}  
                    flipped={card === firstChoice || card === secondChoice || card.matched}
                    disabled={disabled}
                  />
              ))}
          </div>
        </div>)}
      </div>
    )
};

export default Board;