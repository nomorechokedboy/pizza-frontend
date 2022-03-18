import axios from 'axios';
import { API, axiosConfigs } from '../../config';

const axiosServer = axios.create(axiosConfigs);

// axiosServer.interceptors.request.use((config) => {
//   /* const customHeaders = {
//     Authorization: '',
//   }; */

//   alert('Test');
//   if (!typeof window) {
//     config.headers!.Authorization = `AccessToken ${localStorage.getItem(
//       'accessToken',
//     )}`;
//   }

//   return config;
// });

// axiosServer.interceptors.response.use(
//   (response) => response,
//   async (e) => {
//     const prevConfigs = e.config;
//     const { status, data } = e.response;

//     if (status === 401 && !prevConfigs._retry) {
//       prevConfigs._retry = true;

//       const {
//         data: { token, refreshToken },
//       } = await axiosServer.get('user/refreshToken', {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem('refreshToken')}`,
//         },
//       });
//       localStorage.setItem('accessToken', token);
//       localStorage.setItem('refreshToken', refreshToken);

//       return axiosServer({
//         ...prevConfigs,
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//     }

//     return Promise.reject(e);
//   },
// );

export default axiosServer;
