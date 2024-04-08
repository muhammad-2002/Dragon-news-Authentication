import React from "react";
import Caterogy from "../../Sections/Caterogy";
import DragonNews from "../../Sections/DragonNews";
import LogInWith from "../../Sections/LogInWith";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import NewsSlider from "../../components/NewsSlider/NewsSlider";

const Home = () => {
  return (
    <div className="font-poppins font-normal">
      <Header />
      <NewsSlider />
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-4 text-bold gap-4 ">
        <div className="">
          <Caterogy />
        </div>
        <div className="col-span-1 md:col-span-2">
          <DragonNews />
        </div>
        <div className=" ">
          <LogInWith />
        </div>
      </div>
    </div>
  );
};

export default Home;
