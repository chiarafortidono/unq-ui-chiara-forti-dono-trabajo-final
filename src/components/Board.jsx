import React from "react";
import Card from "./Card";
import { useEffect, useState } from 'react';
import './Board.css';

const cardImages = [{src: "/1.jpg", matched: false}, {src: "/2.jpg", matched: false}, 
    {src: "/3.jpg", matched: false}, {src: "/4.jpg", matched: false}, 
    {src: "/5.jpg", matched: false}, {src: "/6.jpg", matched: false},
    {src: "/7.jpg", matched: false}, {src: "/8.jpg", matched: false}, 
    {src: "/9.jpg", matched: false}, {src: "/10.jpg", matched: false}, 
    {src: "/11.jpg", matched: false}, {src: "/12.jpg", matched: false}, 
    {src: "/13.jpg", matched: false}, {src: "/14.jpg", matched: false},
    {src: "/15.jpg", matched: false}, {src: "/16.jpg", matched: false},
    {src: "/17.jpg", matched: false}, {src: "/18.jpg", matched: false},
    {src: "/19.jpg", matched: false}, {src: "/20.jpg", matched: false},
    {src: "/21.jpg", matched: false}, {src: "/22.jpg", matched: false},
    {src: "/23.jpg", matched: false}, {src: "/24.jpg", matched: false},
    {src: "/25.jpg", matched: false}, {src: "/26.jpg", matched: false},
    {src: "/27.jpg", matched: false}, {src: "/28.jpg", matched: false},
    {src: "/29.jpg", matched: false}, {src: "/30.jpg", matched: false},
    {src: "/31.jpg", matched: false}, {src: "/32.jpg", matched: false}];

const Board = () => {
    const [cards, setCards] = useState([]);
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

    const shuffleCards = (size) => {
        const shuffledImages = cardImages.sort(() => Math.random() - 0.5);
        const images = shuffledImages.slice(0, size);
        const pairs = images.concat(images)
            .map((card) => ({...card, id: Math.random()}));
        setCards(pairs);

        //const images = cardImages.slice(24, 32);
        //const pairs = images.concat(images)
        // .sort(() => Math.random() - 0.5)
        // .map((card) => ({...card, id: Math.random()}));
        //setCards(pairs);
    };

    return (
      <div>
        <button onClick={() => shuffleCards(8)}>New game</button>
          <div className='board-grid-container'>
            <div className='board-grid'>
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