import React from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';

interface ValidateProps {
  message: string;
  warning?: true;
}

export default function Validate({ message, warning }: ValidateProps) {
  return (
    <p
      className={cx(styles.errorMsg, {
        [styles.warning]: warning,
      })}
    >
      {message}
    </p>
  );
}
