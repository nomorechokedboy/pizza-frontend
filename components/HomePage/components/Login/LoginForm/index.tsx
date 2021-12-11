import dynamic from 'next/dynamic';
import Image from 'next/image';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setIsLogin } from '../../../../../redux/isLogin/action';
import { ILoginForm } from '../../../../../types';
import LoginInput from '../LoginInput';
import styles from './styles.module.scss';

const RegisterForm = dynamic(() => import('./RegisterForm'));

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
      <button type="submit" className={styles.submitBtn} onClick={onSubmit}>
        Login
      </button>
    </form>
  );
};

export default function LoginForm() {
  const [isRegister, setIsRegister] = React.useState(false);
  const [checked, setChecked] = React.useState('Login');
  const activeLogin = React.useMemo(
    () => (checked === 'Login' ? styles.active : ''),
    [checked],
  );
  const activeSignup = React.useMemo(
    () => (checked === 'Signup' ? styles.active : ''),
    [checked],
  );

  const dispatch = useDispatch();

  const handleExit = () => dispatch(setIsLogin(false));
  const handleLogin = () => {
    setChecked('Login');
    setIsRegister(false);
  };
  const handleRegister = () => {
    setChecked('Signup');
    setIsRegister(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Image
          src="https://dominos.vn/img/bg/modal-signin-signup.png"
          layout="fill"
          placeholder="blur"
          blurDataURL="https://theme.hstatic.net/200000093231/1000565457/14/lazyload.jpg?v=963"
          className={styles.img}
        />
      </div>
      <div className={styles.right}>
        <div className={styles.exit} onClick={handleExit}>
          <i className="fas fa-times"></i>
        </div>
        <div className={styles.formHeader}>
          <h2
            className={`${styles.title} ${activeLogin}`}
            onClick={handleLogin}
          >
            Login
          </h2>
          <h2
            className={`${styles.title} ${activeSignup}`}
            onClick={handleRegister}
          >
            Signup
          </h2>
        </div>
        {!isRegister && <DefaultForm />}
        {isRegister && <RegisterForm />}
      </div>
    </div>
  );
}
