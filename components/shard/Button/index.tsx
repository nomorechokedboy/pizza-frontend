import React from 'react';
import styles from './styles.module.scss';

interface ButtonProps {
  label: string;
  btnStyle: string;
  type?: 'submit' | 'reset';
  handleClick: React.MouseEventHandler;
}

export default function Button({
  label,
  btnStyle,
  handleClick,
  type,
}: ButtonProps) {
  return (
    <button type={type} className={styles[btnStyle]} onClick={handleClick}>
      {label}
    </button>
  );
}
