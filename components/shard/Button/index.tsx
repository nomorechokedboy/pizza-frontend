import React from 'react';
import styles from './styles.module.scss';

interface ButtonProps {
  text: string;
  style: string;
  handleClick: React.MouseEventHandler;
}

export default function Button({ text, style, handleClick }: ButtonProps) {
  return (
    <button className={styles[style]} onClick={handleClick}>
      {text}
    </button>
  );
}
