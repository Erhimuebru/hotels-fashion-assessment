// Hero.js
import React from "react";
import Banner from "../../assets/hotel.jpeg";
import { BiSearch } from 'react-icons/bi';
import { RiArrowDropDownLine } from 'react-icons/ri';
import "./Hero.css";
import SearchComponents from "../Search/Search";


const Hero = () => {
  return (
  
    <><div className="mt-28 relative">
      <img
        style={{ filter: "brightness(50%)" }}
        className="hero-image"
        src={Banner}
        alt="Banner" />
      <div className="absolute inset-0  justify-center items-center text-center text-white">
        <div className="hero-content">
          <h1 className="hero-title">FIND A HOME FOR YOUR DESIGNS</h1>
          <p className="hero-subtitle">Pop Ups in Top Class Hotels Around The World</p>

        </div>
       <SearchComponents/>
      </div>

    </div>
  
    </>
  );
}

export default Hero;
