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

      /*If the data can't be accessed, the redirect will be thrown.*/
      if (response.status !== 200) {
        window.location.href = "/pokemon";
      }
      const data = await response.json();
      setPokemonData(data);
    };
      /*To use useParams in the useEffect hook we need to call function that is inside. The hook in the List component doesn't need it*/
    loadPokemon();
  }, []);

  return (
    <div className="detailContainer">
      <Link className="detailContainer__close" to="/pokemon">
        X
      </Link>

      <img
        src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemonData?.name}.gif`}
        alt={`Image of a Pokemon named ${pokemonData?.name}`}
      />
      <h3 className="detailContainer__title">{pokemonData?.name}</h3>
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
