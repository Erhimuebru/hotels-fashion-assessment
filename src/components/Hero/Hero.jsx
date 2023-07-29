// Hero.js
import React from "react";
import Banner from "../../assets/hotel.jpeg";
import { BiSearch } from 'react-icons/bi';
import { RiArrowDropDownLine } from 'react-icons/ri';
import "./Hero.css";

const Hero = () => {
  return (
  
    <div className="mt-28 relative">
       <img
         style={{ filter: "brightness(50%)" }}
         className="hero-image"
         src={Banner}
         alt="Banner"
      />
    <div className="absolute inset-0  justify-center items-center text-center text-white">
    <div className="hero-content">
         <h1 className="hero-title">FIND A HOME FOR YOUR DESIGNS</h1>
         <p className="hero-subtitle">Pop Ups in Top Class Hotels Around The World</p>
    
    </div>
             <div className="search flex flex-row justify-center items-end mt-96">
             <div className="flex flex-row space-x-2 w-96 bg-white p-3">
             <BiSearch className='h-8 pt-2 w-8 text-[gray]' />
        <input
          className="input bg-white border-none outline-none h-9 max-w-screen-lg border-r-8"
          type="text"
          placeholder="Find a space"
        />
          </div>
          <div className="sear flex flex-row space-x-2 w-96 gap-32 bg-white p-3">
              <input
          className="input durations bg-white border-none outline-none h-9 max-w-screen-lg border-r-8"
          type="text"
          
          placeholder="Duration"
        />
    
          <RiArrowDropDownLine className='h-9 w-12 text-[gray]' />
              </div>

              <div className='search-icons bg-red-950 ml-2'>
        <BiSearch className="search-btn h-6 w-6 text-white" />
      </div>
    
              </div> 
    </div>

  </div>
  );
}

export default Hero;
