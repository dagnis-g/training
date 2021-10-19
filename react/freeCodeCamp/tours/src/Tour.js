import React, { useState } from 'react';

const Tour = ({ id, name, info, image, price, handleRemove }) => {
  const [moreInfo, setMoreInfo] = useState(true);

  const newInfo = info.substr(0, 150);
  const toggleInfo = () => {
    setMoreInfo(!moreInfo);
  };

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {moreInfo ? `${newInfo}...` : info}
          <button onClick={toggleInfo}>
            {moreInfo ? 'show more' : 'show less'}
          </button>
        </p>
        <button className="delete-btn" onClick={() => handleRemove(id)}>
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
