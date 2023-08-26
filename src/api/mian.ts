import axios, { isCancel, AxiosError } from 'axios';
const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 1000,
  headers: { 'content-type': 'application/json' }
});

export default instance;
