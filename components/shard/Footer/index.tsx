import React from 'react';
import { goTop } from '../../../utils/Scroll';
import styles from './styles.module.scss';

export default function Footer() {
  const scrollToTop = React.useCallback(goTop, []);

  return (
    <footer className={styles.container}>
      <div className={styles.toTop} onClick={scrollToTop}>
        <i className="fas fa-angle-double-up fa-2x"></i>
        <span className={styles.text}>To Home Page</span>
      </div>
    </footer>
  );
}
