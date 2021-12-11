import axios from 'axios';
import { API } from '../../config';

export const GetAllProduct = () =>
  axios.get(API + '/api/v1/product/').then((data) => data);
