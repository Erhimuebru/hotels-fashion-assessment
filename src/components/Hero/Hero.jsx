import React from "react";
import Banner from "../../assets/hotel.jpeg"
import { Link } from 'react-router-dom';
import SearchComponents from "../Search/Search";
const Hero = () => {
    return ( 

    //     <div
    //   className="bg-cover bg-center h-3/4 sm:h-screen relative brightness-75"
    //   style={{ backgroundImage: `url(${Banner})` }}
    // >
    //   {/* Text Container */}
    //   <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 p-4">
    //     <h1 className="text-6xl font-extrabold text-white text-center">FIND A HOME FOR YOUR DESIGNS</h1>
    //     <p className="text-lg text-white text-center">Pop Ups in Top Class Hotels Around The World</p>
    //     <div>
    //         <SearchComponents/>
    //     </div>
    //   </div>
    //      </div>

    <div className=" -mt-96 relative">
    <img  style={{ filter: "brightness(50%)" }} className="w-full h-72 sm:h-full object-cover brightness-50 -mt-96" src={Banner}/>
    <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white mt-4">
    <h1 className="text-6xl text-white text-center pb-3">FIND A HOME FOR YOUR DESIGNS</h1>
     <p className="text-lg text-white text-center pb-12">Pop Ups in Top Class Hotels Around The World</p>
      

     <div>
             <SearchComponents/>
         </div>
    </div>
  </div>

    
        );
}
 
export default Hero;