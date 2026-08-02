import api from "../api/api";


// ======================
// Create Activity Note
// ======================


export async function createActivityNote(data) {


  return await api.post(
    "/activity-note",
    data
  );


}



// ======================
// Get Activity Notes
// ======================


export async function getActivityNotes() {


  return await api.get(
    "/activity-note"
  );


}



// ======================
// Get Activity Note By ID
// ======================


export async function getActivityNoteById(id) {


  return await api.get(
    `/activity-note/${id}`
  );


}



// ======================
// Delete Activity Note
// ======================


export async function deleteActivityNote(id) {


  return await api.delete(
    `/activity-note/${id}`
  );


}