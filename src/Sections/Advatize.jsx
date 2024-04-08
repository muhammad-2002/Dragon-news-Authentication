import React from "react";
import bg from "./../assets/bg.png";

const Advatize = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="h-[500px] w-full bg-no-repeat relative "
    >
      <h1 className="w-[80%] text-4xl text-white text-center font-bold absolute top-20 left-5">
        Create an Amazing Newspaper
      </h1>
      <h1 className="w-[80%] text-[17px] text-white text-center font-bold absolute top-56 left-5">
        Discover thousands of options, easy to customize layouts, one-click to
        import demo and much more.
      </h1>
      <button className="px-8 py-10 left-16 font-bold bg-[#D72050] absolute bottom-5">
        Learn More
      </button>
    </div>
  );
};

export default Advatize;
