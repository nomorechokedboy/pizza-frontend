import dynamic from 'next/dynamic';
import Image from 'next/image';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setIsLogin } from '../../../../redux/isLogin/action';
import Loading from '../../Loading';
import LoginInput from '../LoginInput';
import styles from './styles.module.scss';
import Button from '../../Button';
import SelectTitle from '../../SelectTitle';
import { ILoginForm, UserDecoded } from '../../../../types';
import axiosClient from '../../../../lib/axiosClient';
import jwtDecode from 'jwt-decode';
import { setUserInfo } from '../../../../redux/userInfo/action';
import Validate from '../../Validate';

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
  const [authFailed, setAuthFailed] = React.useState<string>('');

  const dispatch = useDispatch();

  const onSubmit = handleSubmit(async (data) => {
    try {
      const {
        data: { token, refreshToken },
      } = await axiosClient.post('user/login', data);
      localStorage.setItem('accessToken', token);
      localStorage.setItem('refreshToken', refreshToken);

      let { id } = jwtDecode<UserDecoded>(token);

      const {
        data: {
          info: { fullName },
        },
      } = await axiosClient.get(`user/${id}`);

      dispatch(setUserInfo(fullName));
      dispatch(setIsLogin(false));
    } catch {
      setAuthFailed('Username or password is wrong, please try again!');
    }
  });

  React.useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ email: '', password: '' });
    }
  }, [reset, formState]);

  return (
    <>
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
      {authFailed && <Validate message={authFailed} warning />}
    </>
  );
};

export default function LoginForm() {
  const [checked, setChecked] = React.useState('login');

  const dispatch = useDispatch();

  const handleExit = () => dispatch(setIsLogin(false));

  const titles = React.useMemo(() => ['login', 'register'], []);

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
        <SelectTitle state={checked} setState={setChecked} titles={titles} />
        {!(checked === 'register') && <DefaultForm />}
        {checked === 'register' && <RegisterForm />}
      </div>
    </div>
  );
}
