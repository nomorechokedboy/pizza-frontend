import React from 'react';
import { useDispatch } from 'react-redux';
import { setIsLogin } from '../../../redux/isLogin/action';
import styles from './styles.module.scss';

export default function Header() {
  const dispatch = useDispatch();
  const handleLogin = () => dispatch(setIsLogin(true));

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
        <li id="btnLogin" className={styles.item} onClick={handleLogin}>
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
