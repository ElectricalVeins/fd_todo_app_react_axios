import axios from 'axios';

const baseUrl='http://192.168.0.109:3030/api'

axios.interceptors.request.use((config) => {

    config.headers['authorization'] = '1';

    return config
}, (error) => {
    return Promise.reject(error)
});
/**
 * send request
 * @param task
 * @returns {Promise<AxiosResponse<T>>}
 */
export const createTask = async (task) => await axios.post(`${baseUrl}/task`,task);

/**
 *
 * @returns {Promise<AxiosResponse<T>>}
 */
export async function getUserTasks() {
    return axios.get(`${baseUrl}/tasks`)
}

export async function updateTaskById(id,data) {
    return axios.put(`${baseUrl}/task/${id}`,data)
}