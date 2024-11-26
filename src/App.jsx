import { useEffect, useState } from 'react';
import './App.css'
import Card from './components/Card';

const cardImages = [{src: "/1.jpg", matched: false}, {src: "/2.jpg", matched: false}, 
  {src: "/3.jpg", matched: false}, {src: "/4.jpg", matched: false}, 
  {src: "/5.jpg", matched: false}, {src: "/6.jpg", matched: false},
  {src: "/7.jpg", matched: false}, {src: "/8.jpg", matched: false}];

  // más imagenes para el caso de 36 cartas y 64 cartas
  /*}, {src: "/9.jpg"}, {src: "/10.jpg"}, {src: "/11.jpg"}, {src: "/12.jpg"},
  {src: "/13.jpg"}, {src: "/14.jpg"}, {src: "/15.jpg"}, {src: "/16.jpg"}, {src: "/17.jpg"}, {src: "/18.jpg"},
  {src: "/19.jpg"}, {src: "/20.jpg"}, {src: "/21.jpg"}, {src: "/22.jpg"}, {src: "/23.jpg"}, {src: "/24.jpg"},
  {src: "/25.jpg"}, {src: "/26.jpg"}, {src: "/27.jpg"}, {src: "/28.jpg"}, {src: "/29.jpg"}, {src: "/30.jpg"},
  {src: "/31.jpg"}, {src: "/32.jpg"}*/

function App() {

  const [cards, setCards] = useState([]);
  const [firstChoice, setFirstChoice] = useState(null);
  const [secondChoice, setSecondChoice] = useState(null);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
     .sort(() => Math.random() - 0.5)
     .map((card) => ({...card, id: Math.random()}));
    setCards(shuffledCards);
  };

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
  };

  return (
    <div>
        <div>
            <h1>Memotest</h1>
        </div>
        <div>
          <button onClick={shuffleCards}>New game</button>
        </div>
        <div className='board-grid'>
            {cards.map(card => (
                <Card 
                  key={card.id} 
                  card={card}
                  handleChoice={handleChoice}  
                  flipped={card === firstChoice || card === secondChoice || card.matched}
                />
            ))}
        </div>
    </div>
  )
}

export default App;