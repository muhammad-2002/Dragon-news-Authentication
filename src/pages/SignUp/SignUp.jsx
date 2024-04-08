import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/Provider";
import Navbar from "../../components/Navbar/Navbar";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const handleSubmitRegister = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const password = form.get("password");
    form.get("name");
    const email = form.get("email");
    form.get("photoUrl");
    createUser(email, password)
      .then((result) => console.log(result.user))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex justify-center items-center">
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800 ">
          <h1 className="text-2xl font-bold text-center">
            Register your account
          </h1>
          <form onSubmit={handleSubmitRegister} className="space-y-6">
            <div className="space-y-1 text-sm">
              <label htmlFor="username" className="block dark:text-gray-600">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your Name"
                className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="photoUrl" className="block dark:text-gray-600">
                PhotoURL
              </label>
              <input
                type="text"
                name="photoUrl"
                id="photo"
                placeholder="PhotoURL"
                className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="username" className="block dark:text-gray-600">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="username"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="password" className="block dark:text-gray-600">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            <button
              type="submit"
              className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-gray-600"
            >
              Register
            </button>
          </form>

          <p className="text-xs text-center sm:px-6 dark:text-gray-600">
            Don't have an account?
            <Link to="/login" className="underline dark:text-gray-800">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
