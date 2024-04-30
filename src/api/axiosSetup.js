import axios from "axios";

const BASE_URL = "http://localhost:8010/api"; // Your API base URL

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

// Intercept request to add auth token
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Or wherever you store your token
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
