import React from 'react';
import styles from './Constructor.module.css';
export default function Constructor({
  Constructor: { name },
  position,
  points,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.tableCell}>
        <div className={styles.position}>{position}</div>
        <div className={styles.name}>{name}</div>
        <div className={styles.points}>{points}</div>
      </div>
    </div>
  );
}
