import React from 'react';
import { goTop } from '../../../utils/Scroll';
import styles from './styles.module.scss';

export default function GoToTop() {
  const [show, setShow] = React.useState(false);
  const GoToTop = React.useCallback(goTop, []);

  React.useEffect(() => {
    const handleScroll = () => setShow(window.scrollY >= 400);
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {show && (
        <div className={styles.button} onClick={GoToTop}>
          <i className="fas fa-angle-double-up fa-2x"></i>
        </div>
      )}
    </>
  );
}
