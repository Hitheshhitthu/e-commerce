// src/features/auth/login.js or similar
import API from '../../config/axios'; // ✅ Correct


export const loginUser = async (email, password) => {
  try {
    const res = await API.post('/login', { email, password });
    console.log('User logged in:', res.data);
  } catch (error) {
    console.error('Login failed:', error);
  }
};
