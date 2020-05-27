import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://localhost:3030',
  headers: {
    ...(localStorage.getItem('token') ? {Authorization: localStorage.getItem('token')} : {})
  },
});
