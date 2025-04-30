import React from 'react';
import './Cart.css';

function Cart({ cart, removeFromCart }) {
  const totalAmount = cart.reduce((total, item) => total + item.price, 0);

  return (
    <section className="cart">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-image" />
                <div className="cart-details">
                  <h3>{item.name}</h3>
                  <p>${item.price}</p>
                  <button onClick={() => removeFromCart(item.id)} className="remove-btn">Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <h3>Total Amount: ${totalAmount}</h3>
          </div>
        </>
      )}
    </section>
  );
}

export default Cart;