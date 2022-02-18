import axios from 'axios';
import { axiosConfigs } from '../../config';
import Cookie from '../../utils/Cookie';

const axiosClient = axios.create(axiosConfigs);

axiosClient.interceptors.request.use((config) => {
  const customHeaders = {
    Authorization: '',
  };

  const accessToken = Cookie.get('accessToken');

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
      console.log({ refreshToken: Cookie.get('refreshToken') });

      const {
        data: { token, refreshToken },
      } = await axiosClient.get('user/refreshToken', {
        headers: {
          Authorization: `Bearer ${Cookie.get('refreshToken')}`,
        },
      });
      Cookie.set('accessToken', token, {
        exp: 5 / (24 * 60),
      });
      Cookie.set('refreshotken', refreshToken, {
        exp: 2 / 24,
      });

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
