import './GameBoard.css'

export default function GameBoard({ board, handleClickCell }) {
  return <div id="game-board">
    {board.map((value, i) => (
      <button key={i} onClick={() => handleClickCell(i)} disabled={value}>
        {value}
      </button>
    ))}
  </div>
}