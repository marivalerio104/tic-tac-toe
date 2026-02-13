import { useState } from 'react'
import './Player.css'

export default function Player({ initialName, symbol, active }) {
  const [name, setName] = useState(initialName);
  const [editing, setEditing] = useState(false);

  function handleChange(event) {
    setName(event.target.value)
  }

  function handleClick() {
    setEditing(prev => !prev)
  }

  let playerName = <span className="player-name">{name}</span>
  if (editing) {
    playerName = <input type="text" value={name} onChange={handleChange} 
      maxLength={15} />;
  }

  return <div className={`player ${active && "highlight"}`}>
    {playerName}
    <span className="player-symbol">{symbol}</span>
    <button onClick={handleClick}>{editing ? "Save" : "Edit"}</button>
  </div>
}