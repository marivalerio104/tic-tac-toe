import './GameOver.css'

export default function GameOver({ winner, isDraw, setBoard }) {
  return <div id="game-over">
    <h2>Game Over!</h2>
    {isDraw ? <p>It's a draw!</p> : <p>{winner} won!</p>}
    <button onClick={() => setBoard(Array(9).fill(null))}>Rematch!</button>
  </div>
}