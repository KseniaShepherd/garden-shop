import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCatalog } from '../../requests/getCategories';
import CategoryItem from '../CategoryItem';
import styles from './index.module.css';

export default function Catalog() {
  const catalog = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCatalog);
  }, []);

  return (
    <div>
      <div className={styles.catalogTitle}>
        <p id={styles.title}>Catalog</p>
        <Link to={'/categories'} data-cy='allcategories'>
          All categories
        </Link>
      </div>
      <div className={styles.catalog}>
        {catalog.map((el) => (
          <CategoryItem key={el.id} {...el} />
        ))}
      </div>
    </div>
  );
}
