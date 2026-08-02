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



const tokenData = await api.post(
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
"LOGIN RESPONSE:",
tokenData
);



// ======================
// Validasi Token
// ======================

if(!tokenData?.access_token){

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
tokenData.user
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
error
);



return {

success:false,

message:
error.response?.data?.detail ||
"Login gagal"

};


}

}