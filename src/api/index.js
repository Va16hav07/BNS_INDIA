import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Create axios instance with base URL
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add a request interceptor to include the JWT token in headers for authenticated requests
api.interceptors.request.use(
  config => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (userInfo && userInfo.token) {
      config.headers.Authorization = `Bearer ${userInfo.token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// Authentication API functions
export const auth = {
  // Register a new school
  register: (userData) => api.post('/users/register', userData),
  
  // Login user
  login: (email, password) => api.post('/users/login', { email, password }),
  
  // Get user profile
  getUserProfile: () => api.get('/users/profile'),
  
  // Update subscription
  updateSubscription: (plan) => api.put('/users/subscription', { plan })
};

// Student API functions
export const students = {
  // Get all students with optional filters
  getAll: (filters = {}) => api.get('/students', { params: filters }),
  
  // Get student by ID
  getById: (id) => api.get(`/students/${id}`),
  
  // Add new student
  add: (studentData) => api.post('/students', studentData),
  
  // Update student
  update: (id, studentData) => api.put(`/students/${id}`, studentData),
  
  // Delete student
  delete: (id) => api.delete(`/students/${id}`)
};

export default api;
