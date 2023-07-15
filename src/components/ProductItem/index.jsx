import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCartAction } from '../../reducers/cartReducer';
import styles from './index.module.css';

export default function ProductItem({
  id,
  title,
  price,
  discont_price,
  image,
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
        <div className={styles.productItem}>
          <Link to={`/products/${id}`}>
            <div data-cy={`product ${id}`} data-testid='product-item'>
              <img src={`http://localhost:3333${image}`} alt={title}></img>
              <div className={styles.priseString}>
                <h4 data-cy='productPrice'>{realPrice} $</h4>
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
              <p className={styles.productsTitle} data-cy='productName'>
                {title}
              </p>
            </div>
          </Link>
          <button
            className={styles.addBtn}
            onClick={addToCart}
            data-cy={`addToCartBtn ${id}`}
          >
            Add to cart
          </button>
        </div>
      )}
    </div>
  );
}
