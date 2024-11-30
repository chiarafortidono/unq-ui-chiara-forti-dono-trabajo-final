import React, { useState } from 'react';
import './App.css'
import Board from './components/Board';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

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

function App() {
  const [size, setSize] = useState(0);
  const [players, setPlayers] = useState(0);
  const [startGame, setStartGame] = useState(false);
  const [cards, setCards] = useState([]);

  const shuffleCards = (size) => {
    const images = cardImages.slice(0, size/2);
    const pairs = images.concat(images)
      .sort(() => Math.random() - 0.5)
      .map((card) => ({...card, id: Math.random()}));
    setCards(pairs);
  };

  const playerOptions = [ 1, 2 ];

  const sizeOptions = [ {value: 16, label:'4x4'}, {value: 36, label:'6x6'}, {value: 36, label: '8x8'}];

  const handlePlayersChange = (option) => {
    setPlayers(option.value);
  }

  const handleSizeChange = (option) => {
    setSize(option.value);
  }

  const handleClick = () => {
    shuffleCards(size);
    setStartGame(true);
  }

  return (
    <div>
      {startGame ? (
        <Board size={size} players={players} cards={cards} />
      ) : (
      <div>
        <h1>Memotest</h1>
        <div>
          <Dropdown 
            options={playerOptions} 
            value={1}
            onChange={handlePlayersChange}
            placeholder={"Select the number of players"}
          /> 
        </div>
        <div>
          <Dropdown 
            options={sizeOptions} 
            value={'4x4'}
            onChange={handleSizeChange}
            placeholder={"Select the size of the board"}
          />  
        </div>
        <button onClick={handleClick}>New game</button>
      </div>
      )}
      </div>
  )
}

export default App;