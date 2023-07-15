import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { productReducer } from '../reducers/productReducer';
import { cartReducer } from '../reducers/cartReducer';
import { productDescriptionReducer } from '../reducers/productDescriptionReducer';
import { categoriesReducer } from '../reducers/categoriesReducer';
import { productsOfCategoryReducer } from '../reducers/productsOfCategoryReducer';

const rootReducer = combineReducers({
  product: productReducer,
  productDescripton: productDescriptionReducer,
  cart: cartReducer,
  categories: categoriesReducer,
  productsOfCategory: productsOfCategoryReducer,
});

const createStoreWithMiddleware = applyMiddleware(thunk, logger);
export const store = createStore(rootReducer, createStoreWithMiddleware);
