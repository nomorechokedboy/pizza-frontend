import React from 'react';
import Pizza from '../Pizza';
import styles from './styles.module.scss';

export default function Pizzas() {
    return (
        <div className={styles.container}>
            {Array.from(Array(5)).map((el, i) => (
                <Pizza key={i} />
            ))}
        </div>
    );
}
