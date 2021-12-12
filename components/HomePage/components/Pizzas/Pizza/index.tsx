import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import { Product } from '../../../../../types';
import Button from '../../../../shard/Button';

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
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNMT0ysBwAECgGqFsHQaQAAAABJRU5ErkJggg=="
          className={styles.img}
        />
      </div>
      <div className={styles.header}>
        <p className={styles.pizzaName}>{product.name}</p>
      </div>
      <p className={styles.descript}>{product.description}</p>
      <div className={styles.footer}>
        <Button
          label="Add to cart"
          btnStyle="addToCart"
          handleClick={() => console.log('click')}
        />
        <p className={styles.price}>${product.price}</p>
      </div>
    </div>
  );
}
