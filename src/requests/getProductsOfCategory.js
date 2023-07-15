import { loadProductsOfCategoryAction } from '../reducers/productsOfCategoryReducer';

export const getProductsOfCategory = (categoryId) => {
  return (dispatch) => {
    fetch(`http://localhost:3333/categories/${categoryId} `)
      .then((response) => response.json())
      .then((json) => dispatch(loadProductsOfCategoryAction(json.data)));
  };
};
