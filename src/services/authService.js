import api from "../api/api";


// ======================
// Login
// ======================

export async function loginUser(data) {

  try {

    const formData = new URLSearchParams();

    formData.append(
      "username",
      data.email
    );

    formData.append(
      "password",
      data.password
    );


    console.log("==================");
    console.log("LOGIN PAYLOAD");
    console.log({
      username: data.email,
      password: data.password,
    });
    console.log("==================");


    const response = await api.post(
      "/auth/login",
      formData,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );


    console.log("==================");
    console.log("LOGIN RESPONSE");
    console.log(response.data);
    console.log("==================");


    const tokenData = response.data;


    if (tokenData.access_token) {

      localStorage.setItem(
        "access_token",
        tokenData.access_token
      );


      localStorage.setItem(
        "user",
        JSON.stringify(tokenData)
      );

    }


    return {
      success: true,
      data: tokenData,
    };


  } catch (error) {


    console.log("==================");
    console.log("LOGIN ERROR");
    console.log("STATUS:", error.response?.status);
    console.log("DATA:", error.response?.data);
    console.log("MESSAGE:", error.message);
    console.log("==================");


    return {
      success: false,
      message:
        error.response?.data?.detail ||
        "Login gagal",
    };

  }

}



// ======================
// Register
// ======================

export async function registerUser(data) {

  try {

    const response = await api.post(
      "/auth/register",
      data
    );


    return {
      success: true,
      data: response.data,
    };


  } catch (error) {


    console.log("==================");
    console.log("REGISTER ERROR");
    console.log(error.response?.data);
    console.log("==================");


    return {
      success: false,
      message:
        error.response?.data?.detail ||
        "Register gagal",
    };

  }

}



// ======================
// Get Current User
// ======================

export async function getProfile() {

  try {

    const response = await api.get(
      "/auth/me"
    );


    return response.data;


  } catch (error) {

    console.log(
      "PROFILE ERROR",
      error
    );

    throw error;

  }

}



// ======================
// Logout
// ======================

export async function logoutUser() {

  try {

    await api.post(
      "/auth/logout"
    );


  } catch (error) {

    console.warn(
      "Logout API gagal:",
      error
    );


  } finally {


    localStorage.removeItem(
      "access_token"
    );


    localStorage.removeItem(
      "user"
    );

  }

}