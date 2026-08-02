import api from "../api/api";


// ======================
// Login
// ======================


// ======================
// Login
// ======================


export async function loginUser(data) {

  const formData = new URLSearchParams();

  formData.append(
    "username",
    data.email
  );

  formData.append(
    "password",
    data.password
  );


  const response = await api.post(
    "/auth/login",
    formData,
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );


  if (response.access_token) {

    localStorage.setItem(
      "access_token",
      response.access_token
    );


    localStorage.setItem(
      "user",
      JSON.stringify(response)
    );

  }


  return response;

}



// ======================
// Register
// ======================


export async function registerUser(data) {

  return await api.post(
    "/auth/register",
    data
  );

}



// ======================
// Get Current User
// ======================


export async function getProfile() {

  return await api.get(
    "/auth/me"
  );

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