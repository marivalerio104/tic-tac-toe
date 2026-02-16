import Player from './components/Player/Player'
import GameBoard from './components/GameBoard/GameBoard'
import GameOver from './components/GameOver/GameOver'
import './App.css';
import { use, useState } from 'react';

const WINNING_COMBINATIONS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
]

function getActivePlayer(board) {
  const xCount = board.filter(v => v === "X").length;
  const oCount = board.filter(v => v === "O").length;
  return xCount === oCount ? "X" : "O";
}

function calculateWinner(board, players) {
  for (const combination of WINNING_COMBINATIONS) {
    const cell1 = board[combination[0]];
    const cell2 = board[combination[1]];
    const cell3 = board[combination[2]];

    if (cell1 && cell1 === cell2 && cell1 === cell3) {
      return players[cell1];
    }
  }

  return null;
}

export default function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [players, setPlayers] = useState({X: "Player 1", O: "Player 2"});

  const activePlayer = getActivePlayer(board);
  const winner = calculateWinner(board, players);
  const isDraw = !winner && !board.includes(null);

  function handleClickCell(index) {
    setBoard(prev => prev.map((value, i) => (i === index ? activePlayer : value)));
  }

  return <main>
    <div id="game-container">
      <div id="players">
        <Player name={players.X} symbol="X" active={activePlayer === "X"} setPlayers={setPlayers} />
        <Player name={players.O} symbol="O" active={activePlayer === "O"} setPlayers={setPlayers} />
      </div>
      {(winner || isDraw) &&
        <GameOver winner={winner} isDraw={isDraw} setBoard={setBoard} />
      }
      <GameBoard board={board} handleClickCell={handleClickCell} />
    </div>
  </main>
}