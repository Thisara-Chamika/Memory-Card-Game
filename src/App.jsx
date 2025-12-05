import { useState } from "react"
import { Card } from "./components/Card"
import { GameHeader } from "./components/GameHeader"

const cardValue = [
   "🍎",
  "🍌",
  "🍇",
  "🍊",
  "🍓",
  "🥝",
  "🍑",
  "🍒",
  "🍎",
  "🍌",
  "🍇",
  "🍊",
  "🍓",
  "🥝",
  "🍑",
  "🍒",
]

function App() {

  return (
    <div className="app">
      <GameHeader  score={3} moves={10} />

      <div className="cards-grid">
        {cardValue.map((card) => (
          <Card card={card} />
        ))}
      </div>
    </div>
  )
}

export default App
