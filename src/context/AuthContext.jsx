import {
  createContext,
  useEffect,
  useState,
} from "react";

import {
  loginUser,
  registerUser,
  logoutUser,
} from "../services/authService";


export const AuthContext = createContext(null);



export function AuthProvider({ children }) {


const [user, setUser] = useState(null);

const [loading, setLoading] = useState(true);




// ==========================
// Load Session
// ==========================
useEffect(() => {


try {


const token = localStorage.getItem(
  "access_token"
);


const savedUser = localStorage.getItem(
  "user"
);



console.log("==================");
console.log("LOAD SESSION");
console.log("TOKEN :", token);
console.log("USER  :", savedUser);
console.log("==================");



if(token && savedUser){


const parsedUser = JSON.parse(
  savedUser
);



console.log(
  "PARSED USER :",
  parsedUser
);



setUser(
  parsedUser
);



}else{


localStorage.removeItem(
  "access_token"
);


localStorage.removeItem(
  "user"
);


}



}catch(error){


console.error(
  "SESSION ERROR:",
  error
);


localStorage.removeItem(
  "access_token"
);


localStorage.removeItem(
  "user"
);


setUser(null);



}
finally{


setLoading(false);


}



},[]);




// ==========================
// Login
// ==========================
const login = async(
email,
password
)=>{


try{


console.log("==================");
console.log("LOGIN START");
console.log({
 email,
 password
});
console.log("==================");



const response = await loginUser({

email,

password,

});



console.log("==================");
console.log(
"LOGIN SERVICE RETURN"
);
console.log(response);
console.log("==================");





if(!response){


return {

success:false,

message:"Response kosong"

};


}





if(!response.success){


return {


success:false,


message:
response.message || 
"Login gagal"


};


}





// ==========================
// Ambil Token Data
// ==========================

const tokenData = response.data;



console.log("==================");
console.log("TOKEN DATA");
console.log(tokenData);
console.log("==================");





if(!tokenData?.access_token){


return {


success:false,


message:
"Access token tidak ditemukan"


};


}





// ==========================
// Save Session
// ==========================


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




setUser(
tokenData.user
);




console.log(
"LOGIN SUCCESS"
);





return {


success:true,


user:
tokenData.user


};




}catch(error){



console.log("==================");
console.log("LOGIN ERROR");
console.log(
error
);
console.log("==================");



return {


success:false,


message:
error.response?.data?.detail ||
error.message ||
"Login gagal"


};



}



};




// ==========================
// Register
// ==========================
const register = async(data)=>{


try{


const response =
await registerUser(data);



return {


success:true,


data:response


};



}catch(error){


return {


success:false,


message:
error.response?.data?.detail ||
"Register gagal"


};



}



};




// ==========================
// Logout
// ==========================
const logout = async()=>{


try{


await logoutUser();



}catch(error){


console.warn(
"LOGOUT ERROR",
error
);



}
finally{


localStorage.removeItem(
"access_token"
);



localStorage.removeItem(
"user"
);



setUser(null);



}



};






return (

<AuthContext.Provider

value={{

user,

loading,

login,

register,

logout,

isAuthenticated:
!!user,

}}

>


{children}


</AuthContext.Provider>


);



}