import React from 'react';
import styles from './styles.module.scss';

export default function Banner() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>ITALIAN-GANG</h1>
            <h2 className={styles.descript}>
                <span>Pizza for Gangsters</span>
                <span>eating 'til die</span>
            </h2>
        </div>
    );
}
