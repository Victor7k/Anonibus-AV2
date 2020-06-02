import axios from 'axios';

const api = axios.create({
  baseURL: 'https://us-central1-projeto-1-2d7ce.cloudfunctions.net/',
});

export default api;