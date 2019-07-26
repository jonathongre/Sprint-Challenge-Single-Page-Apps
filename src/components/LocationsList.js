import React, { useEffect, useState } from 'react';
import LocationCard from "./LocationCard";
import axios from "axios";

export default function LocationsList() {
    const [locations, setLocations] = useState([]);
    
    useEffect(() => {
    axios
      .get(
        `https://rickandmortyapi.com/api/location/
    `
      )
      .then(response => {
        setLocations(response.data.results);
      });
  }, []);

  return (
    <section className="character-list grid-view">
      <h2>
        {locations.map(locations => (
          <LocationCard data={locations} />
        ))}
      </h2>
    </section>
  );
}
