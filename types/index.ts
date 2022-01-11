export interface Product {
  _id: string;
  name: string;
  description: string;
  img: string;
  price: number;
  type: string;
}

export type ProductTypes = 'pizza' | 'drink' | 'pasta' | 'starter';
export type FormTypes = 'login' | 'register';
// export type Login
export type handleChange = (e: React.FormEvent<HTMLInputElement>) => void;

export interface ILoginForm {
  email: string;
  password: string;
}

export interface IRegisterForm extends ILoginForm {
  confirm: string;
  phoneNumber: string;
  fullName: string;
}

export interface UserDecoded {
  _id: string;
  role: string;
}
