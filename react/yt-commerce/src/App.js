import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';
// import Products from './components/Products/Products';
// import Navbar from './components/Navbar/Navbar';

import { Navbar, Products } from './components';

function App() {
  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve();
    setCart(cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log(products);

  return (
    <div>
      <Navbar />
      <Products products={products} />
    </div>
  );
}

export default App;
