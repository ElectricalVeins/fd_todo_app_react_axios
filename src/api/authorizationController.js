import axios from 'axios';
import { BASE_URL } from '../constants';

export const signIn = (email, password) => axios.post(`${BASE_URL}/sign_in`,
                                                      { email, password });
export const signUp = (data) => axios.post(`${BASE_URL}/sign_up`, data);
