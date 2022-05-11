import React, { useReducer } from "react";
import {
  shoppingInitialState,
  shoppingReducer,
} from "../reducers/shoppingReducers";
import { CartItem } from "./CartItem";
import { ProductItem } from "./ProductItem";

export const ShoppingCart = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const { products, cart } = state;

  const addToCart = (id) => {
    // console.log(id);
    dispatch({ type: "ADD TO CART", payload: id });
  };
  const delFromCart = () => {};
  const clearCart = () => {
    dispatch({ type: "REMOVE ALL FROM CART"});
  };

  return (
    <div>
      <h3>Carrito de Compra</h3>
      <h3>Productos</h3>
      <article className="box grid-responsive">
        {products.map((product) => (
          <ProductItem key={product.id} data={product} addToCart={addToCart} />
        ))}
      </article>
      <h3>Carrito</h3>
      <article className="box">
        <button onClick={clearCart}>Limpiar Cartito</button>
        {cart.map((item, index) => (
          <CartItem key={index} data={item} delFromCart={delFromCart} clearCart={clearCart} />
        ))}
      </article>
    </div>
  );
};
