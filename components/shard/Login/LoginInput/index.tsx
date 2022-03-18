import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import Validate from '../../Validate';
import styles from './styles.module.scss';

interface LoginInputProps {
  label: string;
  register: UseFormRegister<any>;
  placeholder: string;
  inputName: 'email' | 'password' | 'phoneNumber' | 'cPassword' | 'fullName';
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
}: LoginInputProps) {
  if (showPwd) {
    type = showPwd ? 'text' : type;
  }

  return (
    <div className={styles.container}>
      <span className={styles.label}>{label}</span>
      <input
        className={styles.input}
        placeholder={placeholder}
        type={type}
        {...register(inputName)}
      />
      {errors[inputName] && <Validate message={errors[inputName].message} />}
    </div>
  );
}
