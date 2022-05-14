import { types } from "../actions/shoppingActions";

export const shoppingInitialState = {
  products: [
    { id: 1, name: "Producto 1", price: 100 },
    { id: 2, name: "Producto 2", price: 1400 },
    { id: 3, name: "Producto 3", price: 1100 },
    { id: 4, name: "Producto 4", price: 1500 },
    { id: 5, name: "Producto 5", price: 200 },
    { id: 6, name: "Producto 6", price: 500 },
  ],
  cart: [],
};

export function shoppingReducer(state, action) {
  switch (action.type) {
    case types.ADD_TO_CART: {
      let newItem = state.products.find(
        (products) => products.id === action.payload
      );
      //Evita que los items se repitan
      let itemInCart = state.cart.find((item) => item.id === newItem.id);

      //SI el carrito ya tiene el item hace esto
      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : //Si no tiene el item entonces hace esto
          { ...state, cart: [...state.cart, { ...newItem, quantity: 1 }] };
    }
    case types.REMOVE_ONE_FROM_CART: {
      let itemCart = state.cart.find(
        (products) => products.id === action.payload
      );
      return itemCart.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === itemCart.id
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
          };
    }

    case types.REMOVE_ALL_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }
    case types.CLEAR_CART: {
      return { ...state, cart: [] };
    }

    default:
      return state;
  }
}
