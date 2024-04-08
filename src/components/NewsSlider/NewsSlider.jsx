import React from "react";
import Marquee from "react-fast-marquee";
const NewsSlider = () => {
  return (
    <div className="flex bg-gray-200 px-4 py-2">
      <button className=" px-3 py-[1px] text-[16px] text-bold outline-none border-none  text-white bg-[#d72050]">
        Latest
      </button>
      <Marquee speed={110}>
        <p>
          {" "}
          I can be a React component, multiple React components, or just some
          text.
        </p>
        <p>
          {" "}
          I can be a React component, multiple React components, or just some
          text.
        </p>
      </Marquee>
    </div>
  );
};

export default NewsSlider;
