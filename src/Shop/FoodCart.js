import React from 'react'

const FoodCart = ({ cart, func, total, clear }) => (
  <div>
    <h2>Your Cart</h2>
    {cart.map(items => (
      <div>
        {items.name}: ${items.price}{" "}each
        {" "}
        {items.qty}x
        {" "}
        <button
          name={items.name}
          onClick={func}>Remove Item</button>
      </div>
    ))}
    <h2>Total</h2>
    <p>${total}</p>
    <button onClick={clear}>Clear Cart</button>
  </div>
)

export default FoodCart
