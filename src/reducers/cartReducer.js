import {
  ADD_TO_CART,
  DELETE_FROM_CART,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
} from './constants';

export const addToCartAction = (payload) => ({ type: ADD_TO_CART, payload });
export const deleteFromCartAction = (payload) => ({
  type: DELETE_FROM_CART,
  payload,
});
export const incrementQuantity = (payload) => ({
  type: INCREMENT_QUANTITY,
  payload,
});
export const decrementQuantity = (payload) => ({
  type: DECREMENT_QUANTITY,
  payload,
});

const checkProductInCart = (state, payload) => {
  console.log(payload);
  const productInState = state.find((el) => el.id === payload.id);
  if (productInState) {
    productInState.count++;
    return [...state];
  } else {
    return [
      ...state,
      {
        ...payload,
        count: 1,
      },
    ];
  }
};
const decrementOrDelete = (state, payload) => {
  const product = state.find((el) => el.id === payload);
  if (product.count > 1) {
    product.count--;
    return [...state];
  } else {
    return state.filter((el) => el.id !== payload);
  }
};
export const cartReducer = (state = [], action) => {
  if (action.type === ADD_TO_CART) {
    console.log(state);
    return checkProductInCart(state, action.payload);
  } else if (action.type === INCREMENT_QUANTITY) {
    const product = state.find((el) => el.id === action.payload);
    product.count++;
    return [...state];
  } else if (action.type === DELETE_FROM_CART) {
    return state.filter((el) => el.id !== action.payload);
  } else if (action.type === DECREMENT_QUANTITY) {
    return decrementOrDelete(state, action.payload);
  } else {
    return state;
  }
};
