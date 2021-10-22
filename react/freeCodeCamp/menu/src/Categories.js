import React from 'react';

const Categories = ({ category, changeCategory }) => {
  return (
    <button className="filter-btn" onClick={() => changeCategory(category)}>
      {category}
    </button>
  );
};

export default Categories;
