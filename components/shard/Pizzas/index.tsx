import React from 'react';
import Pizza from '../Pizza';
import styles from './styles.module.scss';

export default function Pizzas() {
    return (
        <div className={styles.container}>
            <h2 className={styles.title} id="menu">
                Menu
            </h2>
            {Array.from(Array(5)).map((el, i) => (
                <Pizza key={i} />
            ))}
        </div>
    );
}
