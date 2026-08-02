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
          "Content-Type":
            "application/x-www-form-urlencoded",
        },
      }
    );

    console.log("==================");
    console.log("AXIOS RESPONSE");
    console.log(response);
    console.log("==================");

    console.log("==================");
    console.log("BACKEND RESPONSE");
    console.log(response.data);
    console.log("==================");

    const tokenData = response.data;

    console.log("==================");
    console.log("TOKEN DATA");
    console.log(tokenData);
    console.log("==================");

    if (tokenData?.access_token) {

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

    }

    const result = {

      success: true,

      data: tokenData,

    };

    console.log("==================");
    console.log("LOGIN USER RETURN");
    console.log(result);
    console.log("==================");

    return result;

  } catch (error) {

    console.log("==================");
    console.log("AUTH SERVICE ERROR");
    console.log("STATUS :", error.response?.status);
    console.log("DATA   :", error.response?.data);
    console.log("MESSAGE:", error.message);
    console.log(error);
    console.log("==================");

    return {

      success: false,

      message:
        error.response?.data?.detail ??
        error.message ??
        "Login gagal",

    };

  }

}



// ======================
// Register
// ======================

export async function registerUser(data) {

  const response = await api.post(
    "/auth/register",
    data
  );

  return response.data;

}



// ======================
// Profile
// ======================

export async function getProfile() {

  const response = await api.get(
    "/auth/me"
  );

  return response.data;

}



// ======================
// Logout
// ======================

export async function logoutUser() {

  await api.post(
    "/auth/logout"
  );

  localStorage.removeItem(
    "access_token"
  );

  localStorage.removeItem(
    "user"
  );

}