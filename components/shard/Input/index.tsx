import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import styles from './styles.module.scss';

interface InputProps {
  register: UseFormRegister<any>;
  placeholder: string;
  type: string;
  inputName: string;
  showPwd?: boolean;
  require?: boolean;
  maxLength?: number;
  minLength?: number;
}

export default function Input({
  register,
  type,
  showPwd,
  placeholder,
  inputName,
  ...validateProps
}: InputProps) {
  return (
    <input
      className={styles.input}
      {...(register(inputName),
      {
        ...validateProps,
      })}
    />
  );
}
