import { Card } from "./components/Card"
import { GameHeader } from "./components/GameHeader"
import { useGameLogic } from "./hooks/useGameLogics"
import { winMessage } from "./components/winMessage"


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
  const { cards, score, moves, handleCardClick, initializeGame, isGameComplete } = useGameLogic(cardValue);

  return (
    <div className="app">
      <GameHeader score={score} moves={moves} onReset={initializeGame} />
      {isGameComplete && <winMessage moves={moves} />}
      <div className="cards-grid">
        {cards.map((card) => (
          <Card card={card} onClick={handleCardClick} />
        ))}
      </div>
    </div>
  )
}

export default App
