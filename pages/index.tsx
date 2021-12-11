import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HomePage from '../components/HomePage';
import { GetAllProduct } from '../lib/api/product';
import { selectCount, setCount } from '../redux/count/action';
import styles from '../styles/Home.module.css';
import { Product } from '../types';

export interface HomeProps {
  products: Product[];
}

const Home: NextPage = ({ products }: any) => {
  return <HomePage products={products} />;
};

// export async function getStaticProps() {
//   const { data: products } = await GetAllProduct();

//   return {
//     props: { products },
//   };
// }

export default Home;
