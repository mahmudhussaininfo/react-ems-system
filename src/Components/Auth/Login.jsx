import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(input.email, input.password);
    setInput({ email: "", password: "" });
  };
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="border-2 p-20 rounded-md border-gray-300">
          <h2 className="text-3xl text-white font-bold text-center mb-10">
            Login Now
          </h2>
          <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col">
            <input
              value={input.email}
              name="email"
              onChange={(e) => handleChange(e)}
              required
              className="text-md outline-none rounded-md border-2 border-gray-300 px-5 py-2 text-black"
              type="email"
              placeholder="Enter Your Email"
            />
            <input
              value={input.password}
              name="password"
              onChange={(e) => handleChange(e)}
              required
              className="text-md outline-none text-black rounded-md border-2 border-gray-300 px-5 py-2 mt-3"
              type="password"
              placeholder="Enter Your Password"
            />
            <button
              disabled={input.email === "" || input.password === ""}
              className="text-xl outline-none rounded-md border-2 border-gray-300 px-3 py-2 mt-3 hover:bg-gray-500 hover:text-white hover:transition-all "
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
