import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa6";
import qZone1 from "./../assets/qZone1.png";
import qZone2 from "./../assets/qZone2.png";
import qZone3 from "./../assets/qZone3.png";
import Advatize from "./Advatize";

const LogInWith = () => {
  return (
    <div className="space-y-5">
      <div>
        <h1 className="mb-4 font-semibold"> Login With</h1>

        <button
          type="button"
          className=" flex justify-center items-center gap-3 px-8 w-full py-3 font-semibold border rounded dark:border-blue-800 dark:text-blue-800"
        >
          <FaGoogle />
          Login With Google
        </button>

        <button
          type="button"
          className=" flex justify-center items-center gap-3 px-8 w-full py-3 font-semibold border rounded dark:border-gray-800 dark:text-gray-800 mt-2"
        >
          <FaGithub />
          Login With Github
        </button>
      </div>
      <div>
        <h1 className="mb-4 font-semibold"> Find Us On</h1>

        <button
          type="button"
          className=" flex justify-start items-center gap-3 px-2 w-full py-3 font-semibold border rounded dark:border-gray-800 dark:text-gray-800 border-b-0"
        >
          <div className="bg-gray-300 rounded-full p-2 text-blue-900">
            <FaFacebook />
          </div>
          Facebook
        </button>
        <button
          type="button"
          className=" flex justify-start items-center gap-3 px-2 w-full py-3 font-semibold border rounded dark:border-gray-800 dark:text-gray-800  border-b-0"
        >
          <div className="bg-gray-300 rounded-full p-1 text-blue-400">
            <FaTwitter />
          </div>
          Twitter
        </button>
        <button
          type="button"
          className=" flex justify-start items-center gap-3 px-2 w-full py-3 font-semibold border rounded dark:border-gray-800 dark:text-gray-800 "
        >
          <div className="bg-gray-300 rounded-full p-2 text-red-400">
            <FaInstagram />
          </div>
          Instagram
        </button>
      </div>
      <div>
        <h1 className="mb-4 font-semibold"> Q Zone</h1>
        <div className="space-y-4">
          <img src={qZone1} alt="qZone-1"></img>
          <img src={qZone2} alt="qZone-2"></img>
          <img src={qZone3} alt="qZone-3"></img>
        </div>
      </div>
      <div>
        <Advatize></Advatize>
      </div>
    </div>
  );
};

export default LogInWith;
