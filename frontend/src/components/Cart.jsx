import React from 'react';

const Cart = ({ cart }) => {
  if (!cart || cart.length === 0) {
    return <div><h2>Cart</h2><p>No items in cart</p></div>;
  }

  const groupedItems = cart.reduce((acc, item) => {
    const key = item.id;
    if (!acc[key]) {
      acc[key] = { ...item, quantity: 1 };
    } else {
      acc[key].quantity += 1;
    }
    return acc;
  }, {});

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {Object.values(groupedItems).map(item => (
          <li key={item.id}>
            <h4>{item.name}</h4>
            <p>Price: ₹{item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Total: ₹{item.price * item.quantity}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;