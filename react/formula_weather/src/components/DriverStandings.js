import React from 'react';
import { useEffect, useState } from 'react';
import Driver from './Driver';
import styles from './DriverStandings.module.css';
import PropagateLoader from 'react-spinners/PropagateLoader';

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
    <section>
      <div className={styles.driverCell}>
        <div>P</div>
        <div className={styles.driverNum}>Nr</div>
        <div className={styles.driverName}>Driver</div>
        <div className={styles.driverPoints}>Pts</div>
      </div>
      {isLoading && <PropagateLoader />}
      {!isLoading &&
        standings.map((item, index) => {
          return <Driver key={index} {...item} />;
        })}
    </section>
  );
}
