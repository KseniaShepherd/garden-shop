import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from '../CartItem';
import OrderForm from '../OrderForm';
import icons8forward from '../../images/icons8forward.svg';
import styles from './index.module.css';

export default function CartContainer() {
  const cartsState = useSelector((state) => state.cart);
  const total = Math.round(
    cartsState.reduce(
      (accumulator, { realPrice, count }) => accumulator + realPrice * count,
      0,
    ),
  );
  return (
    <div className={styles.cartContainer}>
      <div className={styles.title}>
        {' '}
        <p>Shopping cart</p>
        <Link to={'/products'}>
          <p className={styles.backToTheStore}>
            Back to the store <img src={icons8forward}></img>
          </p>
        </Link>
      </div>

      <div className={styles.cartList}>
        {cartsState.map((el) => (
          <CartItem key={el.id} {...el} />
        ))}
      </div>

      <div className={styles.orderDetails}>
        <p>Order details</p>
        <div className={styles.totalPrice}>
          <p className={styles.total}>Total</p>
          <p className={styles.totalSum}>
            {total}
            <small>$</small>
          </p>
        </div>
        <OrderForm />
      </div>
    </div>
  );
}
