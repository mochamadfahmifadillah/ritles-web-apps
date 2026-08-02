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



const response = await api.post(
  "/auth/login",
  formData,
  {
    headers:{
      "Content-Type":
      "application/x-www-form-urlencoded",
    },
  }
);



console.log(
  "LOGIN AXIOS RESPONSE:",
  response
);



const tokenData = response.data;



console.log(
  "LOGIN DATA:",
  tokenData
);



// ======================
// Validasi Token
// ======================

if(
  !tokenData ||
  !tokenData.access_token
){


return {


success:false,


message:
"Token tidak ditemukan"


};


}



// ======================
// Simpan Session
// ======================

localStorage.setItem(
"access_token",
tokenData.access_token
);



localStorage.setItem(
"user",
JSON.stringify(
tokenData.user || {}
)
);



// ======================
// Return
// ======================

return {


success:true,


data:tokenData


};



}
catch(error){


console.error(
"LOGIN ERROR:",
error.response?.data || error.message
);



return {


success:false,


message:
error.response?.data?.detail ||
"Login gagal"


};


}


}





// ======================
// Register
// ======================
export async function registerUser(data){


const response = await api.post(
"/auth/register",
data
);


return response.data;


}




// ======================
// Get Profile
// ======================
export async function getProfile(){


const response = await api.get(
"/auth/me"
);


return response.data;


}




// ======================
// Logout
// ======================
export async function logoutUser(){


const response = await api.post(
"/auth/logout"
);


return response.data;


}