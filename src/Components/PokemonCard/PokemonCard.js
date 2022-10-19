import React from "react";
import { Card, PokemonName, PokemonType, EvolveButton } from "./styles";

const PokemonCard = (props) => {
  const evoluirPokemon = () => {
    props.setPokemon({
      ...props.pokemon,
      image:
        "https://archives.bulbagarden.net/media/upload/thumb/0/0d/025Pikachu.png/240px-025Pikachu.png",
      name: "Pikachu"
    });
  };

  const evoluirPokemon2 = () => {
    props.setPokemon2({
      ...props.pokemon2,
      image:
        "https://archives.bulbagarden.net/media/upload/thumb/4/4a/005Charmeleon.png/240px-005Charmeleon.png",
      name: "Charmeleon"
    });
  };

  return (
    <div>
      <Card color={props.pokemon.color}>
        <img src={props.pokemon.image} alt={`Pokemon`} />
        <PokemonName>{props.pokemon.name}</PokemonName>
        <PokemonType>{props.pokemon.type}</PokemonType>
        <p>{props.pokemon.weight}kg</p>

        <EvolveButton onClick={() => evoluirPokemon()}>Evoluir!</EvolveButton>
      </Card>

      <Card color={props.pokemon2.color}>
        <img src={props.pokemon2.image} alt={`Pokemon`} />
        <PokemonName>{props.pokemon2.name}</PokemonName>
        <PokemonType>{props.pokemon2.type}</PokemonType>
        <p>{props.pokemon2.weight}kg</p>

        <EvolveButton onClick={() => evoluirPokemon2()}>Evoluir!</EvolveButton>
      </Card>
    </div>
  );
};

export default PokemonCard;
