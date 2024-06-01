// ==============================================================
//    UNFACTORED CODE
// ==============================================================

// import React, { useState } from "react";
// import {v1 as uuid} from "uuid";
// import axios from "axios";
// import PlayingCard from "./PlayingCard";
// import "./PlayingCardList.css";

// /* Renders a list of playing cards.
//  * Can also add a new card at random. */
// function CardTable() {
//   const [cards, setCards] = useState([]);
//   const addCard = async () => {
//     const response = await axios.get(
//       "https://deckofcardsapi.com/api/deck/new/draw/"
//     );
//     setCards(cards => [...cards, { ...response.data, id: uuid() }]);
//   };
//   return (
//     <div className="PlayingCardList">
//       <h3>Pick a card, any card!</h3>
//       <div>
//         <button onClick={addCard}>Add a playing card!</button>
//       </div>
//       <div className="PlayingCardList-card-area">
//         {cards.map(cardData => (
//           <PlayingCard key={cardData.id} front={cardData.cards[0].image} />
//         ))}
//       </div>
//     </div>
//   );
// }

// CardTable.defaultProps = {};

// export default CardTable;

// ==============================================================
//    STEP THREE REFACTOR
// ==============================================================

// import React from "react";
// import { v1 as uuid } from "uuid";
// import PlayingCard from "./PlayingCard";
// import useAxios from "./hooks/useAxios";
// import "./PlayingCardList.css";

// const CardTable = () => {
//   const [cards, addCards] = useAxios(
//     "https://deckofcardsapi.com/api/deck/new/draw/"
//   );
  
//   const handleAddCards = () => {
//     addCards("https://deckofcardsapi.com/api/deck/new/draw/");
//   }
  
//   return (
//     <div className="PlayingCardList">
//       <h3>Pick a card, any card!</h3>
//       <div>
//         <button onClick={handleAddCards}>Add a playing card!</button>
//       </div>
//       <div className="PlayingCardList-card-area">
//         {cards.map(card => (
//           <PlayingCard key={card.id} front={card.cards[0].image} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default CardTable;

// ==============================================================
//    STEP FOUR REFACTOR
// ==============================================================

import React from "react";
import PlayingCard from "./PlayingCard";
import useAxios from "./hooks/useAxios";
import "./PlayingCardList.css";

const CardTable = () => {
  const [cards, addCards] = useAxios(
    "https://deckofcardsapi.com/api/deck/new/draw/"
  );
  
  const handleAddCards = () => {
    addCards();
  };
  
  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={handleAddCards}>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map(card => (
          <PlayingCard key={card.id} front={card.cards[0].image} />
        ))}
      </div>
    </div>
  );
}

export default CardTable;