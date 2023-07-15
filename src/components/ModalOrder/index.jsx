import React from 'react';
import cross from '../../images/cross.png';
import styles from './index.module.css';

export default function ModalOrder({ responseToRequest, modal, setModal }) {
  return (
    <div className={[styles.modal, modal ? styles.activ : ''].join(' ')}>
      <div className={styles.modalContent}>
        <p> {responseToRequest}</p>
        <img
          onClick={() => setModal(false)}
          src={cross}
          alt='cart'
          width='10'
          height=''
        />
      </div>
    </div>
  );
}
