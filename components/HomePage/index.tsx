import React from 'react';
import styles from 'styles.module.scss';
import Banner from '../shard/Banner';
import Footer from '../shard/Footer';
import Header from '../shard/Header';
import Pizzas from '../shard/Pizzas';

export default function HomePage() {
    return (
        <>
            <Header />
            <Banner />
            <Pizzas />
            <Footer />
        </>
    );
}
