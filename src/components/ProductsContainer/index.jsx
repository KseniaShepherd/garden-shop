import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../requests/getProducts';
import ProductsItem from '../ProductItem';
import FiltersContainer from '../FiltersContainer';
import {filterAndSortProductsAction} from '../../reducers/productReducer';
import styles from './index.module.css';

export default function ProductsContainer() {
  const products = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const [filters, setFilters] = useState({
    fromPrice: 0,
    toPrice: Infinity,
    sortType: '',
    hasDiscount: false,
  });
  useEffect(() => {
    dispatch(getProducts);
  }, []);

  const onFiltersChange = (filters) => {
    setFilters(filters);
  };

  useEffect(() => {
    dispatch(filterAndSortProductsAction(filters))
  }, [filters]);

  return (
    <div className={styles.productsContainer}>
      <div>
        <h1>All products</h1>
      </div>
      <FiltersContainer onFiltersChange={onFiltersChange} filters={filters} />
      <div className={styles.products}>
        {products
          .filter((el) => el.visible)
          .map((el) => (
            <ProductsItem key={el.id} {...el} />
          ))}
      </div>
    </div>
  );
}