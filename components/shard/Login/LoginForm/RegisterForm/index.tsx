import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import axiosClient from '../../../../../lib/axiosClient';
import { setIsRegister } from '../../../../../redux/isRegister/action';
import { IRegisterForm } from '../../../../../types';
import Button from '../../../Button';
import Validate from '../../../Validate';
import LoginInput from '../../LoginInput';
const { yupResolver } = require('@hookform/resolvers/yup');
import registerSchema from '../../../../../lib/validate/register';

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors },
  } = useForm<IRegisterForm>({
    mode: 'onTouched',
    resolver: yupResolver(registerSchema),
  });
  const [error, setError] = React.useState<string>('');
  const dispatch = useDispatch();
  const onSubmit = handleSubmit((data) => {
    axiosClient
      .post('user/register', data)
      .then((response) => {
        console.log({ response });

        if (response.status === 201) {
          dispatch(setIsRegister(false));
        }
      })
      .catch((e) => {
        const {
          errors: [{ email: error }],
        } = e.response.data;

        setError(error);
      });
  });

  React.useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        email: '',
        cPassword: '',
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
      />
      <LoginInput
        label="phone number"
        inputName="phoneNumber"
        placeholder="Type your phone number..."
        type="text"
        errors={errors}
        register={register}
      />
      <LoginInput
        label="email"
        inputName="email"
        placeholder="Type your email..."
        type="text"
        errors={errors}
        register={register}
      />
      <LoginInput
        label="password"
        inputName="password"
        placeholder="Type your password..."
        type="password"
        errors={errors}
        register={register}
      />
      <LoginInput
        label="confirm password"
        inputName="cPassword"
        placeholder="Type your confirm password..."
        type="password"
        errors={errors}
        register={register}
      />
      <Button
        type="submit"
        btnStyle="submitBtn"
        label="Register"
        handleClick={onSubmit}
      />
      {error && <Validate message={error} warning />}
    </form>
  );
}
