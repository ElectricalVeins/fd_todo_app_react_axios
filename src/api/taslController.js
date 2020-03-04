import axios from 'axios';
import { BASE_URL as baseUrl } from '../constants';

/**
 * send request
 * @param task
 * @returns {Promise<AxiosResponse<T>>}
 */
export const createTask = async (task) => await axios.post(`${baseUrl}/task`,
                                                           task);

/**
 *
 * @returns {Promise<AxiosResponse<T>>}
 */
export async function getUserTasks () {
  return axios.get(`${baseUrl}/tasks`);
}
