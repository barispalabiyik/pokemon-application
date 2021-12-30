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
    /* Fetching the data from the API and setting it to the state. */
    /* To get first generation by default const response = await fetch("https://pokeapi.co/api/v2/generation/1/"); */
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?offset=0&limit=151"
    );
    if (response.status !== 200) {
      console.log("Error fetching data");
    }
    const data = await response.json();
    /* Other query fetching setListData(data?.pokemon_species); */
    setListData(data?.results);
  };

  return (
    <div className="listBody">
      <div>
        <img src={require("../mainimg.jpg")} alt="" />
        <input
          type="text"
          placeholder="Filter Pokemons by Name"
          onChange={(event) => setQuery(event?.target?.value)}
        />
      </div>

      <div className="listContainer">
        <h1 className="listContainer__title">Generation 1</h1>
        <h2 className="listContainer__subTitle"> {listData?.length} pokemon</h2>
        <div className="listContainer__grid">
          {listData /* Filtering the list by name and display only the pokemon that match the query. */
            .filter((pokemon) =>
              pokemon.name.toLowerCase().includes(query.toLowerCase())
            )
            .map((pokemon) => (
              <PokemondCard key={pokemon?.name} pokemon={pokemon} />
            ))}
          {listData?.length < 1 && <p>....Loading </p>}
          {/* Displaying a loading info if the list is empty*/}
        </div>
      </div>
    </div>
  );
}
