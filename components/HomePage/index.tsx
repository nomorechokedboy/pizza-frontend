import React from 'react';
import { useSelector } from 'react-redux';
import { HomeProps } from '../../pages';
import { selectIsLogin } from '../../redux/isLogin/action';
import Banner from '../shard/Banner';
import Footer from '../shard/Footer';
import GoToTop from '../shard/GoToTop';
import Header from '../shard/Header';
import Login from '../shard/Login';
import Pizzas from '../shard/Pizzas';
import styles from './styles.module.scss';

interface HomePageProps extends HomeProps {}

export default function HomePage({ products }: HomePageProps) {
  const isLogin = useSelector(selectIsLogin);
  console.log({ isLogin });

  return (
    <>
      <Header />
      <main className={styles.main}>
        <Banner />
        <Pizzas products={products} />
        {isLogin && <Login />}
      </main>
      <Footer />
      <GoToTop />
    </>
  );
}
