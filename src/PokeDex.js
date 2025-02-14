// ==============================================================
//    BASE CODE
// ==============================================================

// import React, { useState } from "react";
// import {v1 as uuid} from "uuid";
// import axios from "axios";
// import PokemonSelect from "./PokemonSelect";
// import PokemonCard from "./PokemonCard";
// import "./PokeDex.css";

// /* Renders a list of pokemon cards.
//  * Can also add a new card at random,
//  * or from a dropdown of available pokemon. */
// function PokeDex() {
//   const [pokemon, setPokemon] = useState([]);
//   const addPokemon = async name => {
//     const response = await axios.get(
//       `https://pokeapi.co/api/v2/pokemon/${name}/`
//     );
//     setPokemon(pokemon => [...pokemon, { ...response.data, id: uuid() }]);
//   };
//   return (
//     <div className="PokeDex">
//       <div className="PokeDex-buttons">
//         <h3>Please select your pokemon:</h3>
//         <PokemonSelect add={addPokemon} />
//       </div>
//       <div className="PokeDex-card-area">
//         {pokemon.map(cardData => (
//           <PokemonCard
//             key={cardData.id}
//             front={cardData.sprites.front_default}
//             back={cardData.sprites.back_default}
//             name={cardData.name}
//             stats={cardData.stats.map(stat => ({
//               value: stat.base_stat,
//               name: stat.stat.name
//             }))}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default PokeDex;

// ==============================================================
//    STEP FOUR REFACTOR
// ==============================================================

import React from "react";
import PokemonSelect from "./PokemonSelect";
import PokemonCard from "./PokemonCard";
import useAxios from "./hooks/useAxios";
import "./PokeDex.css";

const PokeDex = () => {
  const [pokemon, addPokemon] = useAxios(
    "https://pokeapi.co/api/v2/pokemon/"
  );
  
  return (
    <div className="PokeDex">
      <div className="PokeDex-button">
        <h3>Please select your pokemon:</h3>
        <PokemonSelect add={addPokemon} />
      </div>
      <div className="PokeDex-card-area">
        {pokemon.map(data => (
          <PokemonCard
            key={data.id}
            front={data.sprites.front_default}
            back={data.sprites.back_default}
            name={data.name}
            stats={data.stats.map(stat => ({
              value: stat.base_stat,
              name: stat.stat.name
            }))}
          />
        ))}
      </div>
    </div>
  );
}

export default PokeDex;