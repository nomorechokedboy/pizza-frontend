import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLogin } from '../../../redux/isLogin/action';
import styles from './styles.module.scss';
import { selectUserInfo } from '../../../redux/userInfo/action';

export default function Header() {
  const dispatch = useDispatch();
  const handleLogin = () => dispatch(setIsLogin(true));
  const userInfo = useSelector(selectUserInfo);

  return (
    <header className={styles.header} id="header">
      <ul className={styles.container}>
        <Link href="/">
          <a>
            <li id="icon" className={styles.item}>
              <div className={styles.logo} />
              <Image
                src="https://wowthemesnet.github.io/template-fooddelivery-bootstrap-html/img/logo.png"
                alt="logo"
                width={50}
                height={50}
              />
            </li>
          </a>
        </Link>
        {userInfo === '' && (
          <li id="btnLogin" className={styles.item} onClick={handleLogin}>
            Login
          </li>
        )}
        <li className={styles.item}>
          <Link href="/">
            <a>Article</a>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="#menu">
            <a>Menu</a>
          </Link>
        </li>
      </ul>
      <div className={styles.user}>
        <span>{userInfo}</span>
        <i className="fas fa-caret-down"></i>
        <nav className={styles.dropdown}>
          <Link href="/">
            <a className={styles.item}>
              Info <i className="fas fa-user-circle"></i>
            </a>
          </Link>
          <Link href="/">
            <a className={styles.item}>
              Logout <i className="fas fa-sign-out-alt"></i>
            </a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
