import React from 'react';
import styles from './styles.module.scss';

interface SelectTitleProps {
  titles: string[];
  handleClick?: React.MouseEventHandler;
}

export default function SelectTitle({ titles, handleClick }: SelectTitleProps) {
  const [checked, setChecked] = React.useState(titles[0]);

  return (
    <div className={styles.container}>
      {titles.map((title) => (
        <h2
          className={styles.title}
          onClick={() => setChecked(title)}
          key={title}
        >
          {title}
        </h2>
      ))}
    </div>
  );
}
