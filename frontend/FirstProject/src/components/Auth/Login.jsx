import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    // 🔐 call parent login handler
    handleLogin(email, password);

    // ❌ extra console spam hata diya
    // console.log(email, password);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-100">
      <div className="border-2 border-emerald-600 p-10 rounded-2xl bg-white shadow-lg">
        <form
          onSubmit={submitHandler}
          className="flex flex-col items-center justify-center gap-4"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-72 text-black outline-none bg-transparent border-2 border-emerald-600 text-lg rounded-full py-3 px-5 placeholder:text-gray-400 focus:border-emerald-700"
          />

          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-72 text-black outline-none bg-transparent border-2 border-emerald-600 text-lg rounded-full py-3 px-5 placeholder:text-gray-400 focus:border-emerald-700"
          />

          <button
            type="submit"
            className="w-72 mt-2 text-white bg-emerald-600 text-lg rounded-full py-3 hover:bg-emerald-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
