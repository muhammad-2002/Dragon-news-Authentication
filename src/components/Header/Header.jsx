import moment from "moment";
import React from "react";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className=" p-5 flex justify-center flex-col items-center mt-5">
      <img className="" src={logo} alt="logo"></img>
      <p className="text-[18px] ">Journalism Without Fear or Favour</p>
      <h4 className="text-xl font-[400] ">
        {moment().format("dddd, MMMM D, YYYY")}
      </h4>
    </div>
  );
};

export default Header;
