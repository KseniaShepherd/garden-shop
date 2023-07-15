import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSaleProducts } from '../../requests/getProducts';
import ProductsItem from '../ProductItem';
import FiltersSaleContainer from '../FiltersSaleContainers';
import {filterAndSortProductsAction} from '../../reducers/productReducer';
import styles from './index.module.css';

export default function SaleProductsContainer() {

  const saleproducts = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({
    fromPrice: 0,
    toPrice: Infinity,
    sortType: '',
    hasDiscount: false,
  });
  useEffect(() => {
    dispatch(getSaleProducts);
  }, []);

  const onFiltersChange = (filters) => {
    setFilters(filters);
  };
  useEffect(() => {
    dispatch(filterAndSortProductsAction(filters))
  }, [filters]);
  return (
    <div className={styles.saleProductsContainer}>
      <div>
        <h1>Products with sale </h1>
      </div>
      <FiltersSaleContainer
       onFiltersChange={onFiltersChange} filters={filters}
      />
      <div className={styles.saleProducts}>
        {saleproducts
          .filter((el) => el.visible)
          .map((el) => (
            <ProductsItem key={el.id} {...el} />
          ))}
      </div>
    </div>
  );
}
