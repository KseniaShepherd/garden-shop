import { LOAD_PRODUCT } from './constants';

export const loadProduct = (payload) => ({ type: LOAD_PRODUCT, payload });
const getRealPrice = (price, discountPrice) =>
  discountPrice ? Math.round(discountPrice) : Math.round(price);
const calculateDiscountPercentage = (price, discountPrice) =>
  discountPrice ? Math.round(100 - discountPrice / (price / 100)) : 0;

export const productDescriptionReducer = (state = {}, action) => {
  if (action.type === LOAD_PRODUCT) {
    return {
      ...action.payload,
      realPrice: getRealPrice(
        action.payload.price,
        action.payload.discont_price,
      ),
      discountPercentage: calculateDiscountPercentage(
        action.payload.price,
        action.payload.discont_price,
      ),
    };
  } else {
    return state;
  }
};
