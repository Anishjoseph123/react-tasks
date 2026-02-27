import React from "react";
import { MdDelete } from "react-icons/md";
const Cart = ({ cartItems, onRemoveFromCart }) => {
  console.log("Cart Items:", cartItems);
  return (
    <div>
      <h3>Cart Items</h3>
      {cartItems.length === 0 ? (
        <p>Your Cart is Empty!!!</p>
      ) : (
        <ul>
          {cartItems.map((item) => {
            return (
              <li key={item.id}>
                <img
                  src={item.image}
                  alt={item.id}
                  style={{ height: "50px", objectFit: "contain" }}
                />
                <h3>{item.title}</h3>
                <p>{item.price}</p>
                <button onClick={() => onRemoveFromCart(item.id)}>
                  Remove from Cart
                  <MdDelete />
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
export default Cart;
