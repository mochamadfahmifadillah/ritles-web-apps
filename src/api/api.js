import axios from "axios";


const api = axios.create({

  baseURL:
    import.meta.env.VITE_API_URL ||
    // "https://backend-ritles-gl7b.vercel.app",
    // "http://127.0.0.1:8000",
    "https://backend-ritles-change.vercel.app",

  timeout: 10000,

  headers: {
    "Content-Type": "application/json",
  },

});


// =====================================
// Request Interceptor
// =====================================

api.interceptors.request.use(

  (config) => {

    const token = localStorage.getItem("access_token");


    if (token) {

      config.headers.Authorization = `Bearer ${token}`;

    }


    console.log("REQUEST:", {

      method: config.method,

      url: `${config.baseURL}${config.url}`,

      data: config.data,

    });


    return config;

  },


  (error) => {

    console.error(
      "REQUEST ERROR:",
      error
    );


    return Promise.reject(error);

  }

);



// =====================================
// Response Interceptor
// =====================================

api.interceptors.response.use(

  (response) => {


    console.log(
      "RESPONSE:",
      response.data
    );


    return response.data;

  },


  (error) => {


    console.error(
      "API ERROR:",
      {
        status: error.response?.status,

        data: error.response?.data,

        message: error.message,

      }
    );


    if (error.response?.status === 401) {


      localStorage.removeItem(
        "access_token"
      );


      localStorage.removeItem(
        "user"
      );


      if (
        window.location.pathname !== "/login"
      ) {

        window.location.replace(
          "/login"
        );

      }

    }


    return Promise.reject(error);

  }

);


export default api;