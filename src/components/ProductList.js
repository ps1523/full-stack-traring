import React from 'react';
import './Product.css';

function ProductList({ products, addToCart }) {
  return (
    <section className="products">
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">${product.price}</p>
            <button onClick={() => addToCart(product)} className="add-to-cart-btn">Add to Cart</button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ProductList;
