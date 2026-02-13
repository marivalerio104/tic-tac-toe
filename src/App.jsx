import Player from './components/Player/Player'
import GameBoard from './components/GameBoard/GameBoard'
import './App.css';
import { useState } from 'react';

export default function App() {
  const [activePlayer, setActivePlayer] = useState('X');

  return <main>
    <div id="game-container">
      <div id="players">
        <Player initialName="Player 1" symbol="X" active={activePlayer === "X"} />
        <Player initialName="Player 2" symbol="O" active={activePlayer === "O"} />
      </div>
      <GameBoard activePlayer={activePlayer} setActivePlayer={setActivePlayer} />
    </div>
  </main>
}