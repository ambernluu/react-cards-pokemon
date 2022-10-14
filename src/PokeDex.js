import React from "react";
import PokemonSelect from "./PokemonSelect";
import PokemonCard from "./PokemonCard";
import "./PokeDex.css";
import { useAxios } from "./hooks";

/* Renders a list of pokemon cards.
 * Can also add a new card at random,
 * or from a dropdown of available pokemon. */
function PokeDex() {
  const [pokemon, addPokemon, resetPokemon] = useAxios(
    "pokemon", "https://pokeapi.co/api/v2/pokemon/"
  );
  
  return (
    <div className="PokeDex">
      <div className="PokeDex-buttons">
        <h3>Please select your pokemon:</h3>
        <PokemonSelect add={addPokemon} />
        <button onClick={resetPokemon}> Delete all Pokemon</button>
      </div>
      <div className="PokeDex-card-area">
        {pokemon.map(cardData => (
          <PokemonCard
            key={cardData.id} {...cardData} />
      ))}
  
      </div>
    </div>
  );
}

export default PokeDex;
