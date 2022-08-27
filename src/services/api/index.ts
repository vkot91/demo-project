import axios from 'axios';
import { errorBoundary } from './errorBoundary';

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

axiosInstance.interceptors.request.use(
  (response) => {
    return response;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    errorBoundary(error);
    throw error;
  }
);
