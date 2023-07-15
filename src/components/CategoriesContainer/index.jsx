import React, { useEffect } from 'react';
import { getCategories } from '../../requests/getCategories';
import CategoryItem from '../CategoryItem';
import { useDispatch, useSelector } from 'react-redux';
import styles from './index.module.css';

export default function CategoriesContainer() {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories);
  }, []);
  return (
    <div className={styles.categoriesContainer}>
      <h1 data-cy='h1'>Categories</h1>

      <div className={styles.categories}>
        {categories.map((el) => {
          return <CategoryItem key={el.id} {...el} />;
        })}
      </div>
    </div>
  );
}
