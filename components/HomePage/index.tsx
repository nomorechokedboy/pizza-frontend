import Head from 'next/head';
import React from 'react';
import { Product } from '../../types';
import Footer from '../shard/Footer';
import GoToTop from '../shard/GoToTop';
import Header from '../shard/Header';
import Banner from './components/Banner';
import Pizzas from './components/Pizzas';
import styles from './styles.module.scss';

interface HomePageProps {
  products: Product[];
}

export default function HomePage({ products }: HomePageProps) {
  return (
    <>
      <Head>
        <title>Pizzas No</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <Banner />
        <Pizzas products={products} />
      </main>
      <Footer />
      <GoToTop />
    </>
  );
}
