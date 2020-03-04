import axios from 'axios';
import { BASE_URL } from '../constants';

axios.interceptors.request.use((config) => {
  // config.headers['authorization'] = '1';
  return config;
}, (error) => {
  return Promise.reject(error);
});

axios.interceptors.response.use(null, error => {

  const { status } = error.response;
  console.log(error)
  alert('err');

  switch (status) {
    case 401:
      alert('authorization required 401');
      break;
    case 402:
      alert('intercept 402');
      break;
    case 403:
      alert('intercept 403');
      break;
  }

  return Promise.reject(error);
});














