import axios from "axios";

const api = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL ||
    "https://backend-ritles-4o9y-pi.vercel.app",

  timeout: 10000,

  headers: {
    "Content-Type": "application/json",
  },
});

// ======================
// Request Interceptor
// ======================

api.interceptors.request.use(
  (config) => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      if (user?.access_token) {
        config.headers.Authorization = `Bearer ${user.access_token}`;
      }
    } catch (error) {
      console.error("Invalid user data in localStorage");
      localStorage.removeItem("user");
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// ======================
// Response Interceptor
// ======================

api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("user");

      if (window.location.pathname !== "/login") {
        window.location.href = "/login";
      }
    }

    return Promise.reject(error);
  }
);

export default api;