import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import cart from '../../images/cart.png';
import styles from './index.module.css';

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logoAndCatalog}>
        <img src={logo} alt='logo' />
        <Link to='/categories'>Catalog</Link>
      </div>
      <div className={styles.nav}>
        <Link to='/'>MainPage</Link>
        <Link to='/products'>All products</Link>
        <Link to='/saleproducts'>All sales</Link>
      </div>
      <div className={styles.cartImg}>
        <Link to='/cart'>
          <img
            src={cart}
            alt='cart'
            width='26.55'
            height='29.4'
            data-cy='cartImg'
          />
        </Link>
      </div>
    </div>
  );
}
