import React from 'react';
import styles from './Modal.module.css';

const Modal = function ({ show, children }) {
  // show modal or hide depending on the className:
  const showModal = show
    ? `${styles.modal} ${styles.showModal}`
    : `${styles.modal} ${styles.hideModal}`;

  const showBackrop = show ? styles.backdrop : '';

  return (
    <div className={showBackrop}>
      <div className={showModal}>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
