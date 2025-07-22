// src/config/axios.js
import API from '../../config/axios'; // ✅ Correct


const API = axios.create({
  baseURL: 'http://localhost:5000/api',
  withCredentials: true,
});

export default API;
