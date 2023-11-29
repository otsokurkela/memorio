import React from 'react';

export default function Flashcards(props) {
  const set = props.data;
  return (
    <div className="flashcards">
      <h1>{set.set_name} - flashcards</h1>
    </div>
  );
}
