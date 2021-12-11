import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import { ILoginForm, IRegisterForm } from '../../../types';
import Validate from '../Validate';
import styles from './styles.module.scss';

interface LoginInputProps {
  label: string;
  register: UseFormRegister<ILoginForm | IRegisterForm>;
  placeholder: string;
  inputName: 'email' | 'password' | 'phoneNumber' | 'confirm' | 'fullName';
  type: string;
  errors: any;
  showPwd?: boolean;
  required?: boolean;
  maxLength?: number;
  minLength?: number;
}

export default function LoginInput({
  label,
  register,
  inputName,
  errors,
  type,
  showPwd,
  placeholder,
  ...validateProps
}: LoginInputProps) {
  if (showPwd) {
    type = showPwd ? 'text' : type;
  }

  const name = inputName[0].toUpperCase() + inputName.slice(1);
  return (
    <div className={styles.container}>
      <span className={styles.label}>{label}</span>
      <input
        className={styles.input}
        placeholder={placeholder}
        type={type}
        {...register(inputName, {
          ...validateProps,
        })}
      />
      {errors[inputName]?.type === 'required' && (
        <Validate message={`${name} is required!`} />
      )}
      {errors[inputName]?.type === 'minLength' && (
        <Validate
          message={`${name} cannot less than ${validateProps.minLength} characters!`}
        />
      )}
      {errors[inputName]?.type === 'maxLength' && (
        <Validate
          message={`${name} cannot exceed ${validateProps.maxLength} characters!`}
        />
      )}
    </div>
  );
}
