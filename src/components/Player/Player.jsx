import { useState } from 'react'
import './Player.css'

export default function Player({ name, symbol, active, setPlayer }) {
  const [editing, setEditing] = useState(false);

  let playerName = (!editing ? 
    <span className="player-name">{name}</span>
  :
    <input type="text" value={name} maxLength={15}
      onChange={(event) => setPlayer(event.target.value)}
    />
  );

  return <div className={`player ${active && "highlight"}`}>
    {playerName}
    <span className="player-symbol">{symbol}</span>
    <button onClick={() => setEditing(prev => !prev)}>
      {editing ? "Done" : "Edit"}
    </button>
  </div>
}