import React, { useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import img1 from "./assets/download (1).jpeg";
import img2 from "./assets/download (2).jpeg";
import img3 from "./assets/download (3).jpeg";
import img4 from "./assets/download (4).jpeg";
import img5 from "./assets/download (5).jpeg";
import img6 from "./assets/download (6).jpeg";
import img7 from "./assets/download (7).jpeg";
import img8 from "./assets/download (8).jpeg";
import img9 from "./assets/download (9).jpeg";
import img10 from "./assets/download (10).jpeg";
import img11 from "./assets/download (11).jpeg";
import img12 from "./assets/download (12).jpeg";

function App() {
  const [cart, setCart] = useState([]);
  const products = [
    { id: 1, name: 'Product 1', price: 100, image: img1 },
    { id: 2, name: 'Product 2', price: 200, image: img2 },
    { id: 3, name: 'Product 3', price: 300, image: img3 },
    { id: 4, name: 'Product 4', price: 400, image: img4 },
    { id: 5, name: 'Product 5', price: 500, image: img5 },
    { id: 6, name: 'Product 6', price: 600, image: img6 },
    { id: 7, name: 'Product 7', price: 700, image: img7 },
    { id: 8, name: 'Product 8', price: 800, image: img8 },
    { id: 9, name: 'Product 9', price: 900, image: img9 },
    { id: 10, name: 'Product 10', price: 1000, image: img10 },
    { id: 11, name: 'Product 11', price: 1100, image: img11 },
    { id: 12, name: 'Product 12', price: 1200, image: img12 },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>E-Commerce Website</h1>
      </header>
      <main>
        <ProductList products={products} addToCart={addToCart} />
        <Cart cart={cart} removeFromCart={removeFromCart} />
      </main>
    </div>
  );
}

export default App;
