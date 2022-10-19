import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import PokemonCard from "./Components/PokemonCard/PokemonCard";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
function App() {
  const [pokemon, setPokemon] = useState({
    name: "Pichu",
    type: "Electric",
    evolved: false,
    weight: 2,
    color: "yellow",
    image:
      "https://archives.bulbagarden.net/media/upload/thumb/b/b9/172Pichu.png/250px-172Pichu.png",
    id: 0
  });

  const [pokemon2, setPokemon2] = useState({
    name: "Charmander",
    type: "Fire",
    evolved: false,
    weight: 4,
    color: "orange",
    image:
      "https://archives.bulbagarden.net/media/upload/thumb/7/73/004Charmander.png/240px-004Charmander.png",
    id: 1
  });

  return (
    <>
      <GlobalStyles />
      <FlexContainer>
        <PokemonCard
          pokemon={pokemon}
          setPokemon={setPokemon}
          pokemon2={pokemon2}
          setPokemon2={setPokemon2}
        />
      </FlexContainer>
    </>
  );
}

export default App;
