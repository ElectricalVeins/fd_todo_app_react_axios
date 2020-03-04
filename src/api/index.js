import axios from 'axios';
import { BASE_URL, BASE_URL_T } from '../constants';

axios.interceptors.request.use((config) => {
  // config.headers['authorization'] = '1';
  return config;
}, (error) => {
  return Promise.reject(error);
});

axios.interceptors.response.use(null, async error => {

  const { status, data } = error.response;
  /*
    console.log(error.response);
    console.log(error.request);
    console.log(error.config);
  */

  switch (status) {
    case 401:
      //alert(`${data} Error code: ${status}`);

      /*axios.post(`${BASE_URL_T}/sign_in`, {}).then(res => {
        error.config.headers['authorization'] = res.data;
        return axios.request(error.config);
      });
*/
       const {data}= await axios.post(`${BASE_URL_T}/sign_in`, {});
         error.config.headers.authorization = data;
         return axios.request(error.config);

      console.log('success');

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














