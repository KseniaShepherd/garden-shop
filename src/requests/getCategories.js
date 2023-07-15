import { loadCategories, sortCatalog } from '../reducers/categoriesReducer';

export const getCategories = (dispatch) => {
  fetch(`http://localhost:3333/categories/all`)
    .then((response) => response.json())
    .then((json) => dispatch(loadCategories(json)));
};

export const getCatalog = (dispatch) => {
  fetch(`http://localhost:3333/categories/all`)
    .then((response) => response.json())
    .then((json) => dispatch(sortCatalog(json)));
};
