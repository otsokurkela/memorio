import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

export default function Flashcards(props) {
  const set = props.data;
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentCard, setCurrentCard] = useState(0);

  const handleClick = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  const nextCard = (e) => {
    const numberOfCards = set.set_cards.length;
    e.preventDefault();
    if (currentCard === numberOfCards - 1) {
      alert('No next card');
    } else {
      setCurrentCard(currentCard + 1);
      setIsFlipped(false);
    }
  };

  const previousCard = (e) => {
    e.preventDefault();
    if (currentCard === 0) {
      alert('No previous card');
    } else {
      setCurrentCard(currentCard - 1);
      setIsFlipped(false);
    }
  };
  return (
    <div className="flashcards">
      <h1>{set.set_name} - flashcards</h1>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div className="flashcard">
          {set.set_cards[currentCard].card_key}
          <button onClick={handleClick}>Flip</button>
        </div>

        <div className="flashcard">
          {set.set_cards[currentCard].card_description}
          <button onClick={handleClick}>Flip</button>
        </div>
      </ReactCardFlip>
      <button onClick={nextCard}>Next card</button>
      <button onClick={previousCard}>Previous card</button>
    </div>
  );
}
