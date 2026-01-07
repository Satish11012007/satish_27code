import React, {useState} from "react";

const Login = ({handleLogin}) => {

  console.log(handleLogin);

 // I have do the two way winding 
 const [email,setEmail]= useState('')
 const [password,setPassword]= useState('')

  const submitHandler = (e) => {
   e.preventDefault();  
   handleLogin(email,password) 
  console.log("email is",email)
  console.log("password id ",password)

  setEmail('')
  setPassword('')
  }



  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center bg-gray-100">
        <div className="border-2 border-emerald-600 p-10 rounded-2xl bg-white shadow-lg">
          <form 
          onSubmit = {(e)=>{
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center gap-4">
            
            <input
              value = {email}
               onChange = {(e)=>{
                setEmail(e.target.value);
               }}
               required 
              className="w-72 text-black outline-none bg-transparent border-2 border-emerald-600 text-lg rounded-full py-3 px-5 placeholder:text-gray-400 focus:border-emerald-700"
              type="email"
              placeholder="Enter your email"
            />

            <input
            value ={password}
            onChange ={(e)=>{
              setPassword(e.target.value)
            }}
              required
              className="w-72 text-black outline-none bg-transparent border-2 border-emerald-600 text-lg rounded-full py-3 px-5 placeholder:text-gray-400 focus:border-emerald-700"
              type="password"
              placeholder="Enter your password"
            />

            <button className="w-72 mt-2 text-white bg-emerald-600 text-lg rounded-full py-3 hover:bg-emerald-700 transition">
              Login
            </button>

          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
