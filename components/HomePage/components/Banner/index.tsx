import React from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';

export default function Banner() {
  return (
    <div className={styles.container}>
      <div className={styles.banners}>
        <Image
          src="https://images.squaremeal.co.uk/cloud/article/9819/images/the-best-italian-restaurants-in-london-gloria_06102020124732.jpg?w=1000"
          alt="Banner"
          layout="fill"
          className={styles.bannersImg}
          priority
        />
        <div className={styles.bannersText}>
          <h1 className={styles.title}>ITALIAN-GANG</h1>
          <h2 className={styles.descript}>
            <span>Pizza for Gangsters</span>
            <span>eating 'til die</span>
          </h2>
        </div>
      </div>
    </div>
  );
}
