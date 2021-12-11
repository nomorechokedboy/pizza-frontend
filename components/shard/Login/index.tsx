import React from 'react';
import LoginForm from '../LoginForm';
import Overlay from '../Overlay';
import styles from './styles.module.scss';

const Login = React.memo(() => {
  return (
    <Overlay>
      <LoginForm />
    </Overlay>
  );
});

export default Login;
