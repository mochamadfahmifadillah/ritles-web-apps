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


// Karena interceptor sudah return response.data
const tokenData = response;


if(tokenData?.access_token){

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

}


return {

 success:true,

 data:tokenData,

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