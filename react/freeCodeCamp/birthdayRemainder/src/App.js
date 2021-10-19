import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [users, setUsers] = useState(data);
  const clearUsers = () => {
    setUsers([]);
  };
  const getUsers = () => {
    if (users.length === 0) {
      setUsers(data);
    }
  };
  return (
    <main>
      <section className="container">
        <h3>{users.length} birthdays today</h3>
        {users.map(user => (
          <List key={user.id} {...user} />
        ))}
        <button onClick={clearUsers}>clear all</button>
        <button onClick={getUsers}>get birthdays</button>
      </section>
    </main>
  );
}

export default App;
