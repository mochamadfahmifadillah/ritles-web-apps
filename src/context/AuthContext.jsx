import {
  createContext,
  useEffect,
  useState,
} from "react";

import {
  loginUser,
  registerUser,
  logoutUser,
} from "../services/authService";


export const AuthContext = createContext(null);



export function AuthProvider({ children }) {


  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);



  // ==========================
  // Load Session
  // ==========================

  useEffect(() => {


    try {


      const token = localStorage.getItem(
        "access_token"
      );


      const savedUser = localStorage.getItem(
        "user"
      );


      console.log(
        "TOKEN :",
        token
      );


      console.log(
        "USER :",
        savedUser
      );



      if (token && savedUser) {


        setUser(
          JSON.parse(savedUser)
        );


      } else {


        localStorage.removeItem(
          "access_token"
        );


        localStorage.removeItem(
          "user"
        );


      }



    } catch (error) {


      console.error(
        "SESSION ERROR :",
        error
      );


      localStorage.removeItem(
        "access_token"
      );


      localStorage.removeItem(
        "user"
      );


      setUser(null);



    } finally {


      setLoading(false);


    }


  }, []);





  // ==========================
  // Login
  // ==========================

  const login = async (
    email,
    password
  ) => {


    try {


      console.log(
        "========== LOGIN =========="
      );


      console.log(
        "REQUEST :",
        {
          email,
          password
        }
      );



      const response = await loginUser({

        email,

        password,

      });



      console.log(
        "LOGIN RESPONSE :",
        response
      );



      if (!response.success) {


        return {

          success: false,

          message:
            response.message ||
            "Login gagal",

        };


      }



      const tokenData = response.data;



      localStorage.setItem(
        "access_token",
        tokenData.access_token
      );



      localStorage.setItem(
        "user",
        JSON.stringify(
          tokenData.user
        )
      );



      setUser(
        tokenData.user
      );



      return {


        success: true,


        user:
          tokenData.user,


      };



    } catch (error) {



      console.error(
        "========== LOGIN ERROR =========="
      );


      console.error(
        "ERROR :",
        error
      );



      return {


        success: false,


        message:
          error.message ||
          "Login gagal",


      };


    }


  };





  // ==========================
  // Register
  // ==========================

  const register = async (
    data
  ) => {


    try {


      const response =
        await registerUser(data);



      return {


        success: true,


        data:
          response,


      };



    } catch (error) {



      return {


        success: false,


        message:
          error.response?.data?.detail ??
          "Register gagal",


      };


    }


  };





  // ==========================
  // Logout
  // ==========================

  const logout = async () => {


    try {


      await logoutUser();



    } catch (error) {


      console.warn(
        "LOGOUT ERROR",
        error
      );


    } finally {


      localStorage.removeItem(
        "access_token"
      );


      localStorage.removeItem(
        "user"
      );


      setUser(null);


    }


  };





  return (

    <AuthContext.Provider

      value={{

        user,

        loading,

        login,

        register,

        logout,

        isAuthenticated:
          !!user,

      }}

    >

      {children}

    </AuthContext.Provider>

  );

}