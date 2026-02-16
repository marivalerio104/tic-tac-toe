import { useState } from 'react'
import './Player.css'

export default function Player({ name, symbol, active, setPlayers }) {
  const [editing, setEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  let showName = (!editing ? 
    <span className="player-name">{playerName}</span>
  :
    <input type="text" value={playerName} maxLength={15} required name="playerName"
      onChange={(event) => setPlayerName(event.target.value)}
    />
  );

  function handleSubmit(event) {
    event.preventDefault();
    if (editing) setPlayers(prev => ({...prev, [symbol]: playerName}));
    setEditing(prev => !prev);
  }

  return <div className={`player ${active && "highlight"}`}>
    <form onSubmit={handleSubmit}>
      {showName}
      <span className="player-symbol">{symbol}</span>
      <button>{editing ? "Save" : "Edit"}</button>
    </form>
  </div>
}