import React, { useEffect, useState } from 'react';
import EpisodeCard from './EpisodeCard';
import axios from 'axios';

export default function EpisodesList() {
  // TODO: Add useState to track data from useEffect
    const [episodes, setEpisodes] = useState([])
  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
      axios
      .get(
        `https://rickandmortyapi.com/api/episode/
    `
      )
      .then(response => {
        setEpisodes(response.data.results);
      });
  }, [])

  return (
      <section className='character-list grid-view'>
          <h2>{episodes.map(episode => ( <EpisodeCard data={episode} /> 
  ))}
    </h2>
    </section>
      );
}