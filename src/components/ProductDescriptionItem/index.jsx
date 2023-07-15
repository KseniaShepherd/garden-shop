import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCartAction } from '../../reducers/cartReducer';
import styles from './index.module.css';

export default function ProductDescriptionItem({
  id,
  title,
  price,
  discont_price,
  image,
  description,
  realPrice,
  discountPercentage,
}) {
  const dispatch = useDispatch();

  const addToCart = () =>
    dispatch(
      addToCartAction({ id, image, title, price, discont_price, realPrice }),
    );

  return (
    <div>
      {typeof price == 'undifined' ? (
        <div>Loading</div>
      ) : (
        <div className={styles.productDescriptionItem}>
          <p className={styles.productsTitle} data-cy='title'>
            {title}
          </p>
          <div className={styles.description}>
            <img src={`http://localhost:3333${image}`} alt={title}></img>
            <div className={styles.priseString}>
              <h4 className={styles.realPrice} data-cy='productPrice'>
                {realPrice} $
              </h4>
              <p
                className={
                  discont_price ? styles.oldPrice : styles.oldPriceinActive
                }
                data-cy='discountPrice'
              >
                {Math.round(price)} $
              </p>
              <p
                className={
                  discountPercentage
                    ? styles.discountPercentage
                    : styles.discountPercentageinActive
                }
              >
                - {discountPercentage} %
              </p>
            </div>
            <button
              className={styles.toCartBtn}
              onClick={addToCart}
              data-cy='addToCartBtn'
            >
              To cart
            </button>
            <p className={styles.wordDesc}>Description</p>
            <p className={styles.descr}>{description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
