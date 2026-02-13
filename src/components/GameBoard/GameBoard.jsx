import { useState } from 'react';
import './GameBoard.css'

export default function GameBoard() {
  const [board, setBoard] = useState(Array(9).fill(null));

  function handleClick(index) {
    setBoard(prev => prev.map((value, i) => (i === index ? "X" : value)));
  }

  return <div id="game-board">
    {board.map((value, i) => (
      <button key={i} onClick={() => handleClick(i)} disabled={value}>
        {value}
      </button>
    ))}
  </div>
}