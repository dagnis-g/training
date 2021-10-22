import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [foods, setFoods] = useState(items);

  const categories = [
    ...new Set(
      items.map(food => {
        return food.category;
      })
    ),
  ];

  const changeCategory = categoryBtn => {
    let newFoods = [];
    items.map(item => {
      if (item.category === `${categoryBtn}`) {
        newFoods.push(item);

        setFoods(newFoods);
      }
    });
  };

  const showAll = () => {
    setFoods(items);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <div className="btn-container">
          <button className="filter-btn" onClick={showAll}>
            all
          </button>
          {categories.map((category, index) => {
            return (
              <Categories
                key={index}
                category={category}
                changeCategory={changeCategory}
              />
            );
          })}
        </div>
        <div className="section-center">
          {foods.map(food => {
            return <Menu key={food.id} {...food} />;
          })}
        </div>
      </section>
    </main>
  );
}

export default App;
