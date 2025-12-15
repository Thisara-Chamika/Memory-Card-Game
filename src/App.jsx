import { useEffect, useState } from "react"
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

  const [cards, setCards] = useState([]);
  const [flippedCard, setFlippedCards] = useState([]);

  const initializeGame = () => {

    const finalCards = cardValue.map((value, index) =>(
      {
        id: index,
        value,
        isFlipped: false,
        isMatched: false,
      }
    ))

    setCards(finalCards)
    
  }

  useEffect(() => {
    initializeGame()
  }, [])

  const handleCardClick = (card) => {
    if(card.isFlipped || card.isMatched) {
      return;
    }

    const newCards = cards.map((c) => {
      if(c.id === card.id){
        return {...c, isFlipped: true};
      }else{
        return c;
      }
    });

    setCards(newCards);
    const newFlippedCards = [...flippedCard, card.id];
    setFlippedCards(newFlippedCards);

    if(flippedCard.length === 1){
      const firstCard = cards[flippedCard[0]];

      if (firstCard.value === card.value){
        alert("Match");
      }else{

        setTimeout(()=> {
          const flippedBackCard = newCards.map((c) => {
          if (newFlippedCards.includes(c.id) || c.id === card.id){
            return{...c, isFlipped: false}
          }else{
            return c;
          }
        });

        setCards(flippedBackCard);
        setFlippedCards([]);
        }, 1000);
      }
    }
  };

  return (
    <div className="app">
      <GameHeader  score={3} moves={10} />

      <div className="cards-grid">
        {cards.map((card) => (
          <Card card={card} onClick={handleCardClick} />
        ))}
      </div>
    </div>
  )
}

export default App
