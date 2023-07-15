import {
  loadProducts,
  loadSaleProducts,
  loadThreeSaleProducts,
} from '../reducers/productReducer';

export const getProducts = (dispatch) => {
  fetch(`http://localhost:3333/products/all`)
    .then((response) => response.json())
    .then((json) => dispatch(loadProducts(json)));
};
export const getSaleProducts = (dispatch) => {
  fetch(`http://localhost:3333/products/all`)
    .then((response) => response.json())
    .then((json) => dispatch(loadSaleProducts(json)));
};

export const getThreeSaleProducts = (dispatch) => {
  fetch(`http://localhost:3333/products/all`)
    .then((response) => response.json())
    .then((json) => dispatch(loadThreeSaleProducts(json)));
};
