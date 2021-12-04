import React from 'react';
import styles from './styles.module.scss';

interface ButtonProps {
    text: string;
    style: React.CSSProperties;
}

export default function Button({ text, style }: ButtonProps) {
    return (
        <button className={styles.button} onClick={() => console.log('Click')}>
            {text}
        </button>
    );
}
