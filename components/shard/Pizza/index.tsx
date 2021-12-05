import React from 'react';
import Button from '../Button';
import styles from './styles.module.scss';

export default function Pizza() {
    return (
        <div className={styles.container}>
            <img
                className={styles.pizzaImg}
                src="https://wowthemesnet.github.io/template-fooddelivery-bootstrap-html/img/pizza-1.png"
            />
            <div className={styles.header}>
                <div className={styles.title}>
                    <p className={styles.pizzaName}>Cheese pizza</p>
                    <div className={styles.line} />
                    <p className={styles.price}>$15</p>
                </div>
                <p className={styles.descript}>
                    Pizza cheese encompasses several varieties and types of
                    cheeses and dairy products that are designed and
                    manufactured for use specifically on pizza.
                </p>
                <Button text="Add to cart" style="addToCart" />
            </div>
        </div>
    );
}
