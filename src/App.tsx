import { useState } from 'react'
import './App.css'
import { initialGameState, move, type CellIndex } from './game/game'


function App() {
  const [game, setGame] = useState(initialGameState())

  const cellClick = (index: CellIndex) => {
    if (game.endState) return
    setGame(prev => move(prev, index))
  }

  return (
    <div className="game-board">
      <div className="board-row">
        <div onClick={() => cellClick(0)} className="cell">{game.board[0]}</div>
        <div onClick={() => cellClick(1)} className="cell">{game.board[1]}</div>
        <div onClick={() => cellClick(2)} className="cell">{game.board[2]}</div>
      </div>
      <div className="board-row">
        <div onClick={() => cellClick(3)} className="cell">{game.board[3]}</div>
        <div onClick={() => cellClick(4)} className="cell">{game.board[4]}</div>
        <div onClick={() => cellClick(5)} className="cell">{game.board[5]}</div>
      </div>
      <div className="board-row">
        <div onClick={() => cellClick(6)} className="cell">{game.board[6]}</div>
        <div onClick={() => cellClick(7)} className="cell">{game.board[7]}</div>
        <div onClick={() => cellClick(8)} className="cell">{game.board[8]}</div>
      </div>
      {game.endState && <div>{game.endState}</div>}
    </div >
  )
}

export default App
