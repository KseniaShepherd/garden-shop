import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getThreeSaleProducts } from '../../requests/getProducts';
import ProductsItem from '../ProductItem';
import styles from './index.module.css';

export default function SaleSlider() {
  const threeSaleproducts = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getThreeSaleProducts);
  }, []);
  return (
    <div className={styles.saleSlider}>
      <p>Sale</p>
      <div className={styles.saleContainer}>
        {threeSaleproducts.map((el, index) => (
          <ProductsItem key={index} {...el} />
        ))}
      </div>
    </div>
  );
}
