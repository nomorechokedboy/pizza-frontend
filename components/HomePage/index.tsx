import React from 'react';
import Banner from '../shard/Banner';
import Footer from '../shard/Footer';
import GoToTop from '../shard/GoToTop';
import Header from '../shard/Header';
import Pizzas from '../shard/Pizzas';
import styles from './styles.module.scss';

export default function HomePage() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <Banner />
                <Pizzas />
            </main>
            <Footer />
            <GoToTop />
        </>
    );
}
