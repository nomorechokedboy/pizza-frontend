import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLogin, setIsLogin } from '../../../redux/isLogin/action';
import styles from './styles.module.scss';
import { selectUserInfo, setUserInfo } from '../../../redux/userInfo/action';
import dynamic from 'next/dynamic';
import Loading from '../Loading';
import { GetBaseUser } from '../../../lib/api';

const Login = dynamic(() => import('../Login'), {
  loading: () => <Loading />,
});

export default function Header() {
  const dispatch = useDispatch();
  const handleLogin = () => dispatch(setIsLogin(true));
  const userInfo = useSelector(selectUserInfo);
  const handleLogout = () => {
    const token = localStorage.getItem('accessToken');

    if (token) {
      localStorage.removeItem('accessToken');

      dispatch(setUserInfo(''));
    }
  };

  const isLogin = useSelector(selectIsLogin);

  React.useEffect(() => {
    const token = localStorage.getItem('accessToken');

    (async (token: string | null) => {
      try {
        if (token) {
          const {
            data: { info: userInfo },
          } = await GetBaseUser(token);

          dispatch(setUserInfo(userInfo.fullName));
        }
      } catch (e) {
        console.error(e);
      }
    })(token);
  }, [dispatch]);
  return (
    <>
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
        {userInfo && (
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
                <a className={styles.item} onClick={handleLogout}>
                  Logout <i className="fas fa-sign-out-alt"></i>
                </a>
              </Link>
            </nav>
          </div>
        )}
      </header>
      {isLogin && <Login />}
    </>
  );
}
