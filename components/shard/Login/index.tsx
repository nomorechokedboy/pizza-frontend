import React from 'react';
import LoginForm from '../LoginForm';
import Overlay from '../Overlay';

const Login = React.memo(() => {
  return (
    <Overlay>
      <LoginForm />
    </Overlay>
  );
});

export default Login;
