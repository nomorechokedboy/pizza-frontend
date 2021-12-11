import React from 'react';
import styles from './styles.module.scss';

interface OverlayProps {
  children: React.ReactNode;
}

const Overlay = ({ children }: OverlayProps) => {
  return <div className={styles.overlay}>{children}</div>;
};

export default Overlay;
