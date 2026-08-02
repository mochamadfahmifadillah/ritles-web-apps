import api from "./api";

// ============================
// Prediksi Mental Fatigue
// ============================

export async function predictMentalFatigue(data) {
  const response = await api.post("/prediction", data);

  return response.data;
}

// ============================
// Riwayat Prediksi
// ============================

export async function getPredictionHistory() {
  const response = await api.get("/prediction/history");

  return response.data;
}