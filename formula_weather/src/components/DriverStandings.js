import React from 'react';
import { useEffect, useState } from 'react';
import Driver from './Driver';

const API_URL = 'http://ergast.com/api/f1/current/driverStandings.json';

export default function DriverStandings() {
  const [standings, setStandings] = useState([]);

  const getDrivers = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    const driverStandings =
      data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    setStandings(driverStandings);
  };

  useEffect(() => {
    getDrivers();
  }, []);

  console.log(standings);

  return (
    <div>
      {standings.map((item, index) => {
        return <Driver key={index} {...item} />;
      })}
    </div>
  );
}
