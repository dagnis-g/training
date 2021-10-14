import React from 'react';
import styles from './Driver.module.css';
export default function Driver({
  points,
  position,
  Driver: { permanentNumber, givenName, familyName },
}) {
  return (
    <div className={styles.container}>
      <section className={styles.driverCell}>
        <div>{position}</div>
        <div className={styles.driverNum}>{permanentNumber}</div>
        <div className={styles.driverName}>
          {familyName} {givenName}
        </div>
        <div className={styles.driverPoints}>{points}</div>
      </section>
    </div>
  );
}
