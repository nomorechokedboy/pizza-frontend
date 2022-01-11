import axiosClient from '../axiosClient';

export const GetAllProduct = () =>
  axiosClient.get('product/').then((data) => data);
