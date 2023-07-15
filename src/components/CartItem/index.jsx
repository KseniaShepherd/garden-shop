import React from 'react';
import { useDispatch } from 'react-redux';
import {
  deleteFromCartAction,
  incrementQuantity,
  decrementQuantity,
} from '../../reducers/cartReducer';
import cross from '../../images/cross.png';
import minus from '../../images/Rectangle2059.png';
import plus from '../../images/Group3312.png';
import styles from './index.module.css';

export default function CartItem({
  id,
  title,
  price,
  discont_price,
  image,
  count,
  realPrice,
}) {
  const dispatch = useDispatch();

  return (
    <div className={styles.cartItem}>
      <img
        src={`http://localhost:3333${image}`}
        alt={title}
        width='192.6'
        height='166.64'
      ></img>

      <div className={styles.boxTitleAndCross}>
        <p>{title}</p>
        <img
          onClick={() => dispatch(deleteFromCartAction(id))}
          src={cross}
          alt='cart'
          width='20'
          height='20'
        />
      </div>

      <div className={styles.priseString}>
        <h4>{realPrice * count}$</h4>
        <p
          className={discont_price ? styles.oldPrice : styles.oldPriceinActive}
        >
          {Math.round(price) * count} $
        </p>
      </div>

      <div className={styles.quantityCounter}>
        <img
          onClick={() => dispatch(decrementQuantity(id))}
          src={minus}
          alt='cart'
          width='18'
          height='2'
        />
        <p>{count}</p>
        <img
          onClick={() => dispatch(incrementQuantity(id))}
          src={plus}
          alt='cart'
          width='18'
          height='18'
        />
      </div>
    </div>
  );
}
