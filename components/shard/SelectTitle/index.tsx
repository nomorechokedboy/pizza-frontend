import React from 'react';
import styles from './styles.module.scss';
import cx from 'classnames';

interface SelectTitleProps {
  titles: string[];
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
}

export default function SelectTitle({
  titles,
  setState,
  state,
}: SelectTitleProps) {
  return (
    <div className={styles.container}>
      {titles.map((title) => (
        <h2
          className={cx(styles.title, {
            [styles.active]: title === state,
          })}
          onClick={() => setState(title)}
          key={title}
        >
          {title}
        </h2>
      ))}
    </div>
  );
}
