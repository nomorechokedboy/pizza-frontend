import type { NextPage } from 'next';
import React from 'react';
import HomePage from '../components/HomePage';
import { GetAllProduct } from '../lib/api/product';
import { Product } from '../types';

export interface HomeProps {
  products: Product[];
}

const Home: NextPage = ({ products }: any) => {
  return <HomePage products={products} />;
};

export async function getStaticProps() {
  const { data: products } = await GetAllProduct();

  return {
    props: { products },
  };
}

export default Home;
