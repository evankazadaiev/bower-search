import axios from 'axios';

export const http = axios.create({
  timeout: 10 * 1000,
});
