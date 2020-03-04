import axios from 'axios';
import { BASE_URL as baseUrl } from '../constants';

export async function updateTaskById (id, data) {
  return axios.put(`${baseUrl}/task/${id}`, data);
}

export async function getUsersList () {
  return axios.get(`${baseUrl}/admin/users`);
}