import React from 'react';
import styles from './styles.module.scss';

export default function LazyPizza() {
  return (
    <div className={styles.container}>
      <div className={styles.lazyImg}></div>
      <div className={styles.lazyContent}>
        <div className={styles.lazyHeader}></div>
        <div className={styles.lazyBody}></div>
        <div className={styles.lazyButton}></div>
      </div>
    </div>
  );
}
