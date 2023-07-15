import { LOAD_CATEGORIES, SORT_CATALOG } from './constants';

export const loadCategories = (payload) => ({ type: LOAD_CATEGORIES, payload });
export const sortCatalog = (payload) => ({ type: SORT_CATALOG, payload });

export const categoriesReducer = (state = [], action) => {
  if (action.type === LOAD_CATEGORIES) {
    return action.payload;
  } else if (action.type === SORT_CATALOG) {
    return action.payload.slice(0, 4);
  } else {
    return state;
  }
};
