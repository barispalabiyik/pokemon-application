/* eslint-disable jsx-a11y/img-redundant-alt */
import { Link } from "react-router-dom";

export default function PokemondCard({ pokemon }) {
  return (
      <Link
        className="listContainer__card"
        to={`/pokemon/${pokemon.name}`}
        key={pokemon.name}
      >
        <img
          src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemon.name}.gif`}
          alt={`Image of a Pokemon named ${pokemon.name}`}
        />
        <h3>{pokemon.name}</h3>
      </Link>
  );
}
