import dynamic from 'next/dynamic';
import React from 'react';
import { useSelector } from 'react-redux';
import { HomeProps } from '../../pages';
import { selectIsLogin } from '../../redux/isLogin/action';
import Banner from './components/Banner';
import Footer from '../shard/Footer';
import GoToTop from '../shard/GoToTop';
import Header from '../shard/Header';
import styles from './styles.module.scss';
import Pizzas from './components/Pizzas';

const Login = dynamic(() => import('./components/Login'));

interface HomePageProps extends HomeProps {}

export default function HomePage({ products }: HomePageProps) {
  const isLogin = useSelector(selectIsLogin);

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
