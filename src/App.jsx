import { useState } from 'react';
import './App.css'
import Card from './components/Card';

const cardImages = [{src: "/1.jpg"}, {src: "/2.jpg"}, {src: "/3.jpg"}, {src: "/4.jpg"}, {src: "/5.jpg"}, {src: "/6.jpg"},
  {src: "/7.jpg"}, {src: "/8.jpg"}];

  // más imagenes para el caso de 36 cartas y 64 cartas
  /*}, {src: "/9.jpg"}, {src: "/10.jpg"}, {src: "/11.jpg"}, {src: "/12.jpg"},
  {src: "/13.jpg"}, {src: "/14.jpg"}, {src: "/15.jpg"}, {src: "/16.jpg"}, {src: "/17.jpg"}, {src: "/18.jpg"},
  {src: "/19.jpg"}, {src: "/20.jpg"}, {src: "/21.jpg"}, {src: "/22.jpg"}, {src: "/23.jpg"}, {src: "/24.jpg"},
  {src: "/25.jpg"}, {src: "/26.jpg"}, {src: "/27.jpg"}, {src: "/28.jpg"}, {src: "/29.jpg"}, {src: "/30.jpg"},
  {src: "/31.jpg"}, {src: "/32.jpg"}*/

function App() {

  const [cards, setCards] = useState([]);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
     .sort(() => Math.random() - 0.5)
     .map((card) => ({...card, id: Math.random()}));
    setCards(shuffledCards);
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
                <Card key={card.id} src={card.src} flipped={true} />
            ))}
        </div>
    </div>
  )
}

export default App;