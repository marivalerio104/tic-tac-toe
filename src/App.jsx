import Player from './components/Player/Player'
import GameBoard from './components/GameBoard/GameBoard'
import './App.css';

export default function App() {
  return <main>
    <div id="game-container">
      <div id="players">
        <Player initialName="Player 1" symbol="X" />
        <Player initialName="Player 2" symbol="O" />
      </div>
      <GameBoard />
    </div>
    LOG
  </main>
}