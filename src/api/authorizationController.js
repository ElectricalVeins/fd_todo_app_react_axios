import axios from 'axios';
import { BASE_URL, BASE_URL_T } from '../constants';

export const signIn = (email, password) => axios.post(`${BASE_URL_T}/sign_in`,
                                                      { email, password });
export const signUp = (data) => axios.post(`${BASE_URL}/sign_up`, data);
