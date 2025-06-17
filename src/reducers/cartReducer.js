import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from '../actions/actionTypes';

const initialState = JSON.parse(localStorage.getItem('cart')) || [];

const saveToStorage = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart));
};

export default function cartReducer(state = initialState, action) {
  let updatedCart;

  switch (action.type) {
    case ADD_TO_CART: {
      const { id, size, price, title, quantity} = action.payload;
      const index = state.findIndex(item => item.id === id && item.size === size);

      if (index !== -1) {
        updatedCart = [...state];
        updatedCart[index].quantity += quantity;
      } else {
        updatedCart = [...state, { id, size, price, title, quantity}];
      }

      saveToStorage(updatedCart);
      return updatedCart;
    }

    case REMOVE_FROM_CART: {
      updatedCart = state.filter((_, i) => i !== action.payload);
      saveToStorage(updatedCart);
      return updatedCart;
    }

    case CLEAR_CART: {
      localStorage.removeItem('cart');
      return [];
    }

    default:
      return state;
  }
}