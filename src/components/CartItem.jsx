import React from "react";

export const CartItem = ({ data, delFromCart, delAll }) => {
  let { id, name, price, quantity } = data;

  return (
    <div style={{ borderBottom: "thin solid gray" }}>
      <h4>Producto: {name}</h4>
      <h5>
        Precio: {price}.00 x {quantity} = ${price * quantity}.00
      </h5>
      <button onClick={() => delFromCart(id)}>Eliminar</button>
      <button onClick={() => delAll(id)}>Eliminar Todos</button>
    </div>
  );
};
