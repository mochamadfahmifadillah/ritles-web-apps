import api from "../api/api";



// ======================
// Assessment History
// ======================


export async function getAssessmentHistory(){


  return await api.get(
    "/assessment/history"
  );


}