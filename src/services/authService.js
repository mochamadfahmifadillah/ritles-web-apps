import api from "../api/api";

// ======================
// Login
// ======================

export async function loginUser(data) {
  return await api.post("/auth/login", data);
}

// ======================
// Register
// ======================

export async function registerUser(data) {
  return await api.post("/auth/register", data);
}

// ======================
// Get Current User
// ======================

export async function getProfile() {
  return await api.get("/auth/me");
}

// ======================
// Logout
// ======================

export async function logoutUser() {
  try {
    await api.post("/auth/logout");
  } catch (error) {
    console.warn("Logout API gagal:", error);
  } finally {
    localStorage.removeItem("access_token");
    localStorage.removeItem("user");
  }
}