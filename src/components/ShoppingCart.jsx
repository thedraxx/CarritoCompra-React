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
    dispatch({ type: "ADD TO CART", payload: id });
  };
  const delFromCart = (id) => {
    dispatch({ type: "REMOVE ONE FROM CART", payload: id });
  };

  const delAllFromCart = (id) => {
    dispatch({ type: "REMOVE ALL FROM CART",payload: id });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR CART" });
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
          <CartItem
            key={index}
            data={item}
            delFromCart={delFromCart}
            delAllFromCart={delAllFromCart}
          />
        ))}
      </article>
    </div>
  );
};
