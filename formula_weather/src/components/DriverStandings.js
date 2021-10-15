import React from 'react';
import { useEffect, useState } from 'react';
import Driver from './Driver';
import styles from './DriverStandings.module.css';

const API_URL = 'http://ergast.com/api/f1/current/driverStandings.json';

export default function DriverStandings() {
  const [standings, setStandings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getDrivers = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    const driverStandings =
      data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    setStandings(driverStandings);
    setIsLoading(false);
  };

  useEffect(() => {
    getDrivers();
  }, []);

  console.log(standings);

  return (
    <section className={styles.container}>
      {isLoading && '...loading'}
      {!isLoading &&
        standings.map((item, index) => {
          return <Driver key={index} {...item} />;
        })}
    </section>
  );
}
