import axios from 'axios';
import { API, axiosConfigs } from '../../config';

const axiosClient = axios.create(axiosConfigs);

axiosClient.interceptors.request.use((config) => {
  const customHeaders = {
    Authorization: '',
  };

  const accessToken = localStorage.getItem('accessToken');

  if (accessToken) customHeaders.Authorization = `Bearer ${accessToken}`;

  return {
    ...config,
    headers: {
      ...customHeaders,
      ...config.headers,
    },
  };
});

axiosClient.interceptors.response.use(
  (response) => response,
  async (e) => {
    const prevConfigs = e.config;
    const { status, data } = e.response;

    if (status === 401 && !prevConfigs._retry) {
      prevConfigs._retry = true;

      const {
        data: { token, refreshToken },
      } = await axiosClient.get('user/refreshToken', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('refreshToken')}`,
        },
      });
      localStorage.setItem('accessToken', token);
      localStorage.setItem('refreshToken', refreshToken);

      return axiosClient({
        ...prevConfigs,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    }

    return Promise.reject(e);
  },
);

export default axiosClient;
