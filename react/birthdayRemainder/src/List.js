import React from 'react';

const List = ({ name, age, image }) => {
  return (
    <>
      <div className="person">
        <img src={image} alt={name} />
        <div>
          <h4>{name}</h4>
          <p>{age} years</p>
        </div>
      </div>
    </>
  );
};

export default List;
