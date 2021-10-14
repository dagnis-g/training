import React from 'react';

export default function Driver({
  points,
  position,
  permanentNumber,
  Driver: { givenName, familyName },
}) {
  return (
    <section>
      <div>{position}</div>
      <div>{permanentNumber}</div>
      <div>{familyName}</div>
      <div>{givenName}</div>
      <div>{points}</div>
    </section>
  );
}
