export const API = process.env.NEXT_PUBLIC_API;
export const axiosConfigs = {
  baseURL: API,
  timeout: 5000,
  headers: {
    'content-type': 'application/json',
  },
  params: {},
};
