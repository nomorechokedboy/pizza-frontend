export interface Product {
  _id: string;
  name: string;
  description: string;
  img: string;
  price: number;
}

export interface ILoginForm {
  email: string;
  password: string;
}

export interface IRegisterForm extends ILoginForm {
  confirm: string;
  phoneNumber: string;
  fullName: string;
}
