import React from 'react';
import useInView from 'react-cool-inview';
import { HomeProps } from '../../../../pages';
import { Product } from '../../../../types';
import Pizza from './Pizza';
import styles from './styles.module.scss';

interface PizzasProps extends HomeProps {}

export default function Pizzas({ products }: PizzasProps) {
  const { observe, inView } = useInView({
    onEnter: ({ unobserve }) => unobserve(),
  });

  return (
    <div className={styles.container} ref={observe}>
      {products.map((product: Product) => (
        <Pizza key={product._id} product={product} />
      ))}
    </div>
  );
}
