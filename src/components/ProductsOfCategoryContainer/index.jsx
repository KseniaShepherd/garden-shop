import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductItem from '../ProductItem';
import FiltersContainer from '../FiltersContainer';
import {
  filterAndSortProductsByDiscountAction} from '../../reducers/productsOfCategoryReducer';
import { getProductsOfCategory } from '../../requests/getProductsOfCategory';
import { getCategories } from '../../requests/getCategories';
import styles from './index.module.css';

export default function ProductsOfCategoryContainer() {
  const { categoryId } = useParams();
  const dispatch = useDispatch();
  const productsOfCategory = useSelector((state) => state.productsOfCategory);

  const [filters, setFilters] = useState({
    fromPrice: 0,
    toPrice: Infinity,
    sortType: '',
    hasDiscount: false,
  });
  useEffect(() => {
    dispatch(getProductsOfCategory(categoryId));
  }, []);

  const categoryTitlies = useSelector((state) => state.categories);
  useEffect(() => {
    dispatch(getCategories);
  }, []);

  const title = categoryTitlies?.find((el) => el.id === categoryId)?.title;

  const onFiltersChange = (filters) => {
    setFilters(filters);
  };

  useEffect(() => {
    dispatch(filterAndSortProductsByDiscountAction(filters))
  }, [filters]);

  return (
    <div className={styles.productsContainer}>
      <div>
        <h1 data-cy='h1'>{title}</h1>
      </div>
      <FiltersContainer onFiltersChange={onFiltersChange} filters={filters}/> 
      <div className={styles.products}>
        {productsOfCategory
          ?.filter((el) => el.visible)
          .map((el) => (
            <ProductItem key={el.id} {...el} />
          ))}
      </div>
    </div>
  );
}
