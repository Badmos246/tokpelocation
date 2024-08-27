import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://tokpelocation-backend.onrender.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;