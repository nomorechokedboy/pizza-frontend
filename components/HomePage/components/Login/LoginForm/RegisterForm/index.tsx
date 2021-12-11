import React from 'react';
import styles from '../styles.module.scss';
import LoginInput from '../../LoginInput';
import { useForm } from 'react-hook-form';
import { IRegisterForm } from '../../../../../../types';

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors },
  } = useForm<IRegisterForm>();
  const onSubmit = handleSubmit((data) => console.log(data));
  React.useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        email: '',
        confirm: '',
        fullName: '',
        password: '',
        phoneNumber: '',
      });
    }
  });

  return (
    <form>
      <LoginInput
        label="full Name"
        inputName="fullName"
        placeholder="Type your full name..."
        type="text"
        errors={errors}
        register={register}
        required={true}
        minLength={8}
        maxLength={30}
      />
      <LoginInput
        label="phone number"
        inputName="phoneNumber"
        placeholder="Type your phone number..."
        type="text"
        errors={errors}
        register={register}
        required={true}
        minLength={8}
        maxLength={30}
      />
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
      <LoginInput
        label="confirm"
        inputName="confirm"
        placeholder="Type your confirm password..."
        type="password"
        errors={errors}
        register={register}
        required={true}
        minLength={8}
        maxLength={30}
      />
      <button type="submit" className={styles.submitBtn} onClick={onSubmit}>
        Signup
      </button>
    </form>
  );
}
