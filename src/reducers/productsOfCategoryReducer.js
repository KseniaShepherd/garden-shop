import {
  LOAD_PRODUCTS_OF_CATEGORY,
  FILTER_AND_SORT_PRODUCTS_BY_DISCOUNT,
} from './constants';

export const loadProductsOfCategoryAction = (payload) => ({
  type: LOAD_PRODUCTS_OF_CATEGORY,
  payload,
});

export const filterAndSortProductsByDiscountAction = (payload) => ({ type: FILTER_AND_SORT_PRODUCTS_BY_DISCOUNT, payload });
const getRealPrice = (price, discountPrice) =>
  discountPrice ? Math.round(discountPrice) : Math.round(price);
const calculateDiscountPercentage = (price, discountPrice) =>
  discountPrice ? Math.round(100 - discountPrice / (price / 100)) : 0;

export const productsOfCategoryReducer = (state = [], action) => {
  if (action.type === LOAD_PRODUCTS_OF_CATEGORY) {
    return action.payload.map((el) => ({
      ...el,
      visible: true,
      realPrice: getRealPrice(el.price, el.discont_price),
      discountPercentage: calculateDiscountPercentage(
        el.price,
        el.discont_price,
      ),
    }));
  } else if (action.type === FILTER_AND_SORT_PRODUCTS_BY_DISCOUNT) {
    let { fromPrice, toPrice, sortType, hasDiscount } = action.payload;
    state = state.map(el => ({
      ...el, visible: (el.price >= +fromPrice && el.price <= +toPrice) && ((hasDiscount && el.discont_price != null) || !hasDiscount)
    }))
    if (sortType === 'title') {
      state.sort((a, b) => a['title'].localeCompare(b['title']));
    } else if (sortType === 'titleReverse') {
      state.sort((a, b) => b['title'].localeCompare(a['title']));
    } else if (sortType === 'priceAscending') {
      state.sort((a, b) => a['realPrice'] - b['realPrice']);
    } else if (sortType === 'priceDescending') {
      state.sort((a, b) => b['realPrice'] - a['realPrice']);
    } else if (sortType === 'default') {
      state.sort((a, b) => a['id'] - b['id']);
    }
    return [...state];
  }  else {
    return state;
  }
};
