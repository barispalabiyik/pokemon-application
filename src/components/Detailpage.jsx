/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function Detailpage() {
  let { name } = useParams();

  const [pokemonData, setPokemonData] = useState({});

  useEffect(() => {
    const loadPokemon = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await response.json();
      setPokemonData(data);
    };

    loadPokemon();
  }, []);

  return (
    <div className="detailContainer">
      <Link className="detailContainer__close" to="/pokemon">
        X
      </Link>

      <img
        src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${name}.gif`}
        alt={`Image of a Pokemon named ${name}`}
      />
      <h3 className="detailContainer__title" >{name}</h3>
      <h4>
        <span className="detailContainer__detailTitle">ID:</span>{" "}
        {pokemonData?.id}
      </h4>
      <h4>
        <span className="detailContainer__detailTitle">Type: </span>{" "}
        {pokemonData?.types?.map((type) => type.type.name).join(", ")}
      </h4>
      <h4>
        <span className="detailContainer__detailTitle">Height:</span>{" "}
        {pokemonData?.height}
      </h4>

      <h4>
        <span className="detailContainer__detailTitle">Abilities:</span>
        <ul>
          {pokemonData?.abilities?.map((ability, index) => (
            <li key={index}>{ability?.ability?.name}</li>
          ))}
        </ul>
      </h4>
    </div>
  );
}
