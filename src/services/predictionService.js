import api from "../api/api";


// ============================
// Prediksi Mental Fatigue
// ============================


export async function predictMentalFatigue(data) {

  return await api.post(
    "/assessment/predict",
    data
  );

}



// ============================
// Riwayat Prediksi
// ============================


export async function getPredictionHistory() {

  return await api.get(
    "/prediction/history"
  );

}