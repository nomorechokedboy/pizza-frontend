import jwtDecode from 'jwt-decode';
import { UserDecoded } from '../../types';
import axiosClient from '../axiosClient';

export const GetBaseUser = (token: string) => {
  let { id } = jwtDecode<UserDecoded>(token);

  return axiosClient.get(`user/${id}`);
  // return axiosClient.get(`user/${id}`, {
  //   headers: { authorization: `Bearer ${token}` },
  // });
};
