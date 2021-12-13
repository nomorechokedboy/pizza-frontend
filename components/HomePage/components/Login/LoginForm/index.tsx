import dynamic from 'next/dynamic';
import Image from 'next/image';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setIsLogin } from '../../../../../redux/isLogin/action';
import { ILoginForm } from '../../../../../types';
import Loading from '../../../../shard/Loading';
import LoginInput from '../LoginInput';
import styles from './styles.module.scss';
import cx from 'classnames';
import Button from '../../../../shard/Button';

const RegisterForm = dynamic(() => import('./RegisterForm'), {
  loading: () => <Loading />,
});

const DefaultForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors },
  } = useForm<ILoginForm>();

  const onSubmit = handleSubmit((data) => console.log(data));

  React.useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ email: '', password: '' });
    }
  }, [reset, formState]);

  return (
    <form className={styles.formContent}>
      <LoginInput
        label="email"
        inputName="email"
        placeholder="Type your email..."
        type="text"
        errors={errors}
        register={register}
        required={true}
        minLength={8}
        maxLength={30}
      />
      <LoginInput
        label="password"
        inputName="password"
        placeholder="Type your password..."
        type="password"
        errors={errors}
        register={register}
        required={true}
        minLength={8}
        maxLength={30}
      />
      <Button
        type="submit"
        btnStyle="submitBtn"
        label="Login"
        handleClick={onSubmit}
      />
    </form>
  );
};

export default function LoginForm() {
  const [isRegister, setIsRegister] = React.useState(false);
  const [checked, setChecked] = React.useState('Login');
  const activeLogin = React.useMemo(
    () =>
      cx(styles.title, {
        [styles.active]: checked === 'Login',
      }),
    [checked],
  );
  const activeRegister = React.useMemo(
    () =>
      cx(styles.title, {
        [styles.active]: checked === 'Register',
      }),
    [checked],
  );

  const dispatch = useDispatch();

  const handleExit = () => dispatch(setIsLogin(false));
  const handleLogin = () => {
    setChecked('Login');
    setIsRegister(false);
  };
  const handleRegister = () => {
    setChecked('Register');
    setIsRegister(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Image
          src="https://dominos.vn/img/bg/modal-signin-signup.png"
          layout="fill"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNMT0ysBwAECgGqFsHQaQAAAABJRU5ErkJggg=="
          className={styles.img}
          alt="Modal login"
        />
      </div>
      <div className={styles.right}>
        <div className={styles.exit} onClick={handleExit}>
          <i className="fas fa-times"></i>
        </div>
        <div className={styles.formHeader}>
          <h2 className={activeLogin} onClick={handleLogin}>
            Login
          </h2>
          <h2 className={activeRegister} onClick={handleRegister}>
            Register
          </h2>
        </div>
        {!isRegister && <DefaultForm />}
        {isRegister && <RegisterForm />}
      </div>
    </div>
  );
}
