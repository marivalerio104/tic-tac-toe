import Player from './components/Player/Player'
import GameBoard from './components/GameBoard/GameBoard'
// import GameOver from './components/GameOver/GameOver'
import './App.css';
import { useState } from 'react';

const WINNING_COMBINATIONS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
]

export default function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [activePlayer, setActivePlayer] = useState('X');
  const [player1, setPlayer1] = useState("Player 1");
  const [player2, setPlayer2] = useState("Player 2");

  let winner = null;
  for (const combination of WINNING_COMBINATIONS) {
    const cell1 = board[combination[0]];
    const cell2 = board[combination[1]];
    const cell3 = board[combination[2]];

    if (cell1 && cell1 === cell2 && cell1 === cell3) {
      winner = activePlayer === "X" ? player2 : player1;
    }
  }

  function handleClickCell(index) {
    setBoard(prev => prev.map((value, i) => (i === index ? activePlayer : value)));
    setActivePlayer(prev => prev === "X" ? "O" : "X");
  }

  return <main>
    <div id="game-container">
      <div id="players">
        <Player name={player1} symbol="X" active={activePlayer === "X"} setPlayer={setPlayer1} />
        <Player name={player2} symbol="O" active={activePlayer === "O"} setPlayer={setPlayer2} />
      </div>
      {/* {winner && <GameOver winner={winner} />} */}
      <GameBoard board={board} handleClickCell={handleClickCell} />
    </div>
  </main>
}