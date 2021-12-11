import React from 'react';
import Button from '../Button';
import styles from './styles.module.scss';
import Image from 'next/image';
import { HomeProps } from '../../../pages';
import { Product } from '../../../types';

interface PizzaProps {
  product: Product;
}

export default function Pizza({ product }: PizzaProps) {
  return (
    <div className={styles.container}>
      <div className={styles.pizzaImg}>
        <Image
          src={product.img}
          width={211}
          height={211}
          placeholder="blur"
          blurDataURL="https://theme.hstatic.net/200000093231/1000565457/14/lazyload.jpg?v=963"
          className={styles.img}
        />
      </div>
      <div className={styles.header}>
        <p className={styles.pizzaName}>{product.name}</p>
      </div>
      <p className={styles.descript}>{product.description}</p>
      <div className={styles.footer}>
        <Button
          text="Add to cart"
          style="addToCart"
          handleClick={() => console.log('click')}
        />
        <p className={styles.price}>${product.price}</p>
      </div>
    </div>
  );
}
