import React from 'react';

export default function Set(props) {
  const set = props.data;
  console.log(set.set_cards);
  return (
    <div className="set-page">
      <h1>{set.set_name}</h1>
      <div className="set-actions">
        <a href={'/sets/flashcards/'.concat(set.set_id)}>Start flashcards</a>
      </div>
      <div className="set-cards-list">
        <h3>Cards in this set</h3>
        <table className="cards-table">
          <tbody>
            {set.set_cards.map((card) => {
              return (
                <tr key={card.card_id}>
                  <td>{card.card_key}</td>
                  <td>{card.card_description}</td>
                </tr>
              );
            })}
            <tr>
              <td>nimi</td>
              <td>selitys</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
