import Image from 'next/image';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLogin } from '../../../redux/isLogin/action';
import { selectIsRegister } from '../../../redux/isRegister/action';
import { ILoginForm } from '../../../types';
import LoginInput from '../LoginInput';
import styles from './styles.module.scss';

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors },
  } = useForm<ILoginForm>();
  const isRegister = useSelector(selectIsRegister);
  const dispatch = useDispatch();

  const handleExit = () => dispatch(setIsLogin(false));

  const onSubmit = handleSubmit((data) => console.log(data));

  React.useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ email: '', password: '' });
    }
  }, [reset, formState]);

  return (
    <form className={styles.container} onSubmit={onSubmit}>
      <div className={styles.imgWrapper}>
        <Image
          src="https://dominos.vn/img/bg/modal-signin-signup.png"
          layout="fill"
          placeholder="blur"
          blurDataURL="https://theme.hstatic.net/200000093231/1000565457/14/lazyload.jpg?v=963"
          className={styles.img}
        />
      </div>
      <div className={styles.form}>
        <div className={styles.exit} onClick={handleExit}>
          <i className="fas fa-times"></i>
        </div>
        <div className={styles.formHeader}>
          <h2 className={styles.title}>Login</h2>
          <h2 className={styles.title}>Signup</h2>
        </div>
        <div className={styles.formContent}>
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
        </div>
      </div>
    </form>
  );
}
