import axiosServer from '../axiosServer';

export const GetAllProduct = () =>
  axiosServer.get('product/').then((data) => data);
