import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhos:3000',
});

export default api;
