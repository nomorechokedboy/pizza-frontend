import React from 'react';
import styles from './styles.module.scss';

interface ValidateProps {
  message: string;
}

export default function Validate({ message }: ValidateProps) {
  return <p className={styles.errorMsg}>{message}</p>;
}
