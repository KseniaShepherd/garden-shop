import React from 'react';
import dwarf from '../../images/dwarf.png';
import FormGetDiscount from '../FormGetDiscount';
import styles from './index.module.css';

export default function BannerGetDiscount() {
  return (
    <div className={styles.bannerBackground}>
      <div className={styles.bannerGetDiscount}>
        <img src={dwarf} alt='dwarf' width={422} height={422}></img>
        <div className={styles.bannerText}>
          <p className={styles.firstString}> 5% off</p>
          <p className={styles.secondString}>on the first order</p>
        </div>
        <div className={styles.form}>
          <FormGetDiscount />
        </div>
      </div>
    </div>
  );
}

