import React from "react";
import Banner1 from "../../assets/image/banner-3.jpeg";
import Banner2 from "../../assets/image/banner-2.webp";
import { Outlet } from "react-router-dom";
import HangMoi from "../HangMoi/HangMoi";
import Slider from "../slider/Slider";

const Banner = () => {
  return (
    <div className="">
      <Slider />
      <HangMoi />
    </div>
  );
};

export default Banner;
