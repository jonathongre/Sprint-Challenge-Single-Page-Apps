import React, { useEffect, useState } from 'react';
import CharacterCard from "./CharacterCard";
import axios from "axios";
import SearchForm from './SearchForm';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
    const [characters, setCharacters] = useState([]);
    const [searchChar, setSearchChar] = useState();
    
    const onSearch = value => {
    setSearchChar(value)
  };

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
       if (searchChar) {
      axios.get(`https://rickandmortyapi.com/api/character/?name=${searchChar}`)
        .then(data => {
          console.log(data);
          setCharacters(data.data.results)
        })
        
    } else {
      axios.get("https://rickandmortyapi.com/api/character/")
        .then(data => {
          console.log(data.data.results);
          setCharacters(data.data.results);
        })
        
    }
  }, [searchChar]);

  return (
      <div className='character-list grid-view'>
    <section>
      <SearchForm onSearch={onSearch}/>
      </section>
      
      <section className='character-list grid-view'>
      {characters.map(character => (
          <CharacterCard data={character} />
        ))}
        
    </section>
</div>
)
}
