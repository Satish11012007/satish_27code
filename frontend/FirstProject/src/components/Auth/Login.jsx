import React from "react";

const Login = () => {

 //these es also known as the two way winding 
  const submitHandler = (e) => {
   e.preventDefault();   // 👈 VERY IMPORTANT
  console.log("hello guys form will be submitted");
  }



  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center bg-gray-100">
        <div className="border-2 border-emerald-600 p-10 rounded-2xl bg-white shadow-lg">
          <form   
          onSubmit={submitHandler}
          className="flex flex-col items-center justify-center gap-4">
            
            <input
               required 
              className="w-72 text-black outline-none bg-transparent border-2 border-emerald-600 text-lg rounded-full py-3 px-5 placeholder:text-gray-400 focus:border-emerald-700"
              type="email"
              placeholder="Enter your email"
            />

            <input
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
