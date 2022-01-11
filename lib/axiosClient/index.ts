import axios from 'axios';
import { API } from '../../config';

const configs = {
  baseURL: API,
  timeout: 5000,
  headers: {
    'content-type': 'application/json',
  },
};

const axiosClient = axios.create(configs);

axiosClient.interceptors.request.use((config) => {
  /* const customHeaders = {
    Authorization: '',
  }; */

  if (!typeof window) {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers!.Authorization = accessToken;
    }
  }

  return config;
});

export default axiosClient;
