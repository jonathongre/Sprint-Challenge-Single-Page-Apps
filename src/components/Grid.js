import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterList from "./CharacterList";

function Data() {
  const [characters, setCharacters] = useState([]);
  const [locations, setLocations] = useState([]);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/`).then(response => {
      setCharacters(response.data);
    });
  }, []);
  return (
    <>
      <CharacterList data={characters} />
    </>
  );
}

export default Data;