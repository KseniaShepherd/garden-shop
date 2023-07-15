import React from 'react';
import instagramLogo from '../../images/Instagram.png';
import whatsAppLogo from '../../images/WhatsApp.png';
import styles from './index.module.css';

export default function FooterContainer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.contact}>
        <p className={styles.contact}>Contact</p>
        <p className={styles.telnumber}>+49 999 999 99 99 </p>
        <div className={styles.socialMedia}>
          <figure>
            <img
              src={instagramLogo}
              alt='instagramLogo'
              width='44'
              height='44'
            />
            <figcaption>Instagram</figcaption>
          </figure>
          <figure>
            <img src={whatsAppLogo} alt='whatsAppLogo' width='44' height='44' />
            <figcaption>WhatsApp</figcaption>
          </figure>
        </div>
      </div>
      <div className={styles.address}>
        <p className={styles.address}>Address</p>
        <a href='https://www.google.com/search?q=telranDE'>
          Linkstraße 2, 8 OG, 10785, Berlin, Deutschland
        </a>
        <div>
          <p className={styles.workingHours}>Working Hours:</p>
          <p className={styles.timeWork}>24 hours a day</p>
        </div>
      </div>

      <div className={styles.map}>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.409222750825!2d13.37285601580702!3d52.50793287981184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851d00f714303%3A0xb7b4fcea44396e2d!2sAIT%20TR%20GmbH!5e0!3m2!1sru!2sde!4v1688383221323!5m2!1sru!2sde'
          width='1440'
          height='525'
          loading='lazy'
        ></iframe>
      </div>
    </div>
  );
}
