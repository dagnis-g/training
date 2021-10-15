import React from 'react';
import { useState, useEffect } from 'react';
import Constructor from './Constructor';

const API_URL = 'https://ergast.com/api/f1/current/constructorStandings.json';

export default function ConstructorStandings() {
  const [isLoading, setIsLoading] = useState(true);
  const [standings, setStandings] = useState([]);

  const getContructors = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();

    const constructorStandings =
      data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
    console.log(
      'constructors: ',
      data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings
    );
    setStandings(constructorStandings);
    setIsLoading(false);
  };

  useEffect(() => {
    getContructors();
  }, []);
  return (
    <div>
      {isLoading && '...loading'}
      {!isLoading &&
        standings.map((item, index) => {
          return <Constructor key={index} {...item} />;
        })}
    </div>
  );
}
