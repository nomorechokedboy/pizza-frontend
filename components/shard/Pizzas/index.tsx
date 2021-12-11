import React from 'react';
import dynamic from 'next/dynamic';
import styles from './styles.module.scss';
import useInView from 'react-cool-inview';
import LazyPizza from '../LazyPizza';
import { HomeProps } from '../../../pages';
import { GetAllProduct } from '../../../lib/api/product';
import { Product } from '../../../types';

interface PizzasProps extends HomeProps {}

const Pizza = dynamic(() => import('../Pizza'), {
  loading: () => <LazyPizza />,
});

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
