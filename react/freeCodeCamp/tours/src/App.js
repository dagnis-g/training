import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const handleRemove = id => {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  };

  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setTours(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const reloadTours = () => {
    setIsLoading(true);
    fetchData();
  };

  return (
    <main>
      {isLoading && <Loading />}
      {!isLoading && <Tours tours={tours} handleRemove={handleRemove} />}
      {tours.length === 0 && !isLoading && (
        <div className="title" onClick={reloadTours}>
          <h2>no tours left</h2>
          <button className="btn">refresh</button>
        </div>
      )}
    </main>
  );
}

export default App;
