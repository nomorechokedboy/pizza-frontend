export interface Product {
  _id: string;
  name: string;
  description: string;
  img: string;
  price: number;
  type: string;
}

export type ProductTypes = 'pizza' | 'drink' | 'pasta' | 'starter';

export interface ILoginForm {
  email: string;
  password: string;
}

export interface IRegisterForm extends ILoginForm {
  confirm: string;
  phoneNumber: string;
  fullName: string;
}
