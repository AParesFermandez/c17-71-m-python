import React from "react";

const SignUpForm = () => {
  return (
    <div
      className="w-full bg-[#4db8c0] rounded-xl shadow-2xl overflow-hidden p-8 space-y-8 mt-6"
    >
      <h2
        className="text-center text-4xl font-extrabold text-white"
      >
        Registra a tu asociacion
      </h2>
      <form method="POST" action="#" className="space-y-6">
        <div className="relative">
          <input
            placeholder="john@prueba.com"
            className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
            required=""
            id="email"
            name="email"
            type="email"
          />
          <label
            className="absolute left-0 -top-3.5 text-gray-200 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-200 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-blue-500 peer-focus:text-sm"
            htmlFor="email"
          >
            Email address
          </label>
        </div>
        <div className="relative">
          <input
            placeholder="Password"
            className="peer h-10 w-full border-b-2 border-gray-200 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-blue-500"
            required=""
            id="password"
            name="password"
            type="password"
          />
          <label
            className="absolute left-0 -top-3.5 text-gray-200 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-200 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-blue-500 peer-focus:text-sm"
            htmlFor="password"
          >
            Password
          </label>
        </div>
        <div className="flex items-center justify-between">
          <label className="flex items-center text-sm text-gray-200">
            <input
              className="form-checkbox h-4 w-4 text-purple-600 bg-gray-800 border-gray-300 rounded"
              type="checkbox"
            />
            <span className="ml-2">Remember me</span>
          </label>
        </div>
        <button
          className="w-full py-2 px-4 bg-[#118A95] hover:bg-[#3bdbe9] rounded-md shadow-lg text-white font-semibold transition duration-200"
          type="submit"
        >
          Sign In
        </button>
      </form>
      <div className="text-center text-gray-300">
        Don't have an account?
        <a className="text-purple-300 hover:underline" href="#">
          Sign up
        </a>
      </div>
    </div>
  );
};

export default SignUpForm;
