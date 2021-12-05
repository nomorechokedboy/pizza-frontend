import React from 'react';
import styles from './styles.module.scss';

export default function Header() {
    return (
        <header className={styles.header} id="header">
            <ul className={styles.container}>
                <a href="/">
                    <li id="icon" className={styles.item}>
                        <img
                            className={styles.logo}
                            src="https://wowthemesnet.github.io/template-fooddelivery-bootstrap-html/img/logo.png"
                            alt="logo"
                        />
                    </li>
                </a>
                <li id="btnLogin" className={styles.item}>
                    Login
                </li>
                <li className={styles.item}>
                    <a href="">Article</a>
                </li>
                <li className={styles.item}>
                    <a href="#menu">Menu</a>
                </li>
            </ul>
        </header>
    );
}
