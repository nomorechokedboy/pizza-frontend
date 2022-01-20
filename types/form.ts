export type ProductTypes = 'pizza' | 'drink' | 'pasta' | 'starter';
export type FormTypes = 'login' | 'register';

export interface ILoginForm {
  email: string;
  password: string;
}

export interface IRegisterForm extends ILoginForm {
  cPassword: string;
  phoneNumber: string;
  fullName: string;
}
