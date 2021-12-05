import React from 'react';
import styles from './styles.module.scss';

interface ButtonProps {
    text: string;
    style: string;
}

export default function Button({ text, style }: ButtonProps) {
    return (
        <button className={styles[style]} onClick={() => console.log('Click')}>
            {text}
        </button>
    );
}
