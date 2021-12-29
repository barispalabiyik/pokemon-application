/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState, useEffect } from "react";
import PokemondCard from "./PokemondCard";

export default function List() {
  const [query, setQuery] = useState("");

  const [listData, setListData] = useState([]);

  useEffect(() => {
    loadPokemon();
  }, []);

  const loadPokemon = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/generation/1/");
    const data = await response.json();
    setListData(data.pokemon_species);
  };

  return (
    <div className="listBody">
      <div>
        <img src={require("../mainimg.jpg")} alt="" />
        <input
          type="text"
          placeholder="Filter Pokemons by Name"
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>

      <div className="listContainer">
        <h1 className="listContainer__title">Generation 1</h1>
        <h2 className="listContainer__subTitle"> {listData.length} pokemon</h2>
        <div className="listContainer__grid">
          {listData
            .filter((pokemon) =>
              pokemon.name.toLowerCase().includes(query.toLowerCase())
            )
            .map((pokemon) => (
              <PokemondCard key={pokemon.name} pokemon={pokemon} />
            ))}
        </div>
      </div>
    </div>
  );
}
