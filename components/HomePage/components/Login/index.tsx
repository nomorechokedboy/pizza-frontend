import React from 'react';
import Overlay from '../../../shard/Overlay';
import LoginForm from './LoginForm';

const Login = React.memo(() => {
  return (
    <Overlay>
      <LoginForm />
    </Overlay>
  );
});

Login.displayName = 'Login';
export default Login;
