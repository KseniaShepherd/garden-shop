import React from 'react';
import { Link } from 'react-router-dom';
import imageSaleBanner from '../../images/imageSaleBanner.png';
import styles from './index.module.css';

export default function BannerSale() {
  return (
    <div className={styles.bannerBackground}>
      <div className={styles.bannerSale}>
        <div className={styles.bannerText}>
          <p className={styles.title}>Sale</p>
          <p className={styles.slogan}>New season</p>
          <Link to='/saleproducts'>Sale</Link>
        </div>
        <img
          src={imageSaleBanner}
          alt='imageSaleBanner'
          width={700}
          height={600}
        ></img>
      </div>
    </div>
  );
}
