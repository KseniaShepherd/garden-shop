import { loadProduct } from '../reducers/productDescriptionReducer';

export const getProduct = (productId) => {
  return (dispatch) => {
    fetch(`http://localhost:3333/products/${productId}`)
      .then((response) => response.json())
      .then((json) => dispatch(loadProduct(json[0])));
  };
};
