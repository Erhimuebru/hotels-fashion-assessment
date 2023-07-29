import React from "react";

import { ArrowRightCircleIcon} from "@heroicons/react/24/outline"

const Section = () => {
    return (
        <><h2 className="text-black text-4xl mb-14 ml-16">Meet Our Verified Exclusive Brands</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ml-16 mr-16 bg-pink-100">
            <div className="">
                <img
                    src="https://res.cloudinary.com/dmfb370xe/image/upload/v1690588392/WhatsApp_Image_2023-07-29_at_12.51.28_AM_mhgzos.jpg"
                    alt=""
                    className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col lg:mt-24 ml-20 sm:mt-10">
                <h2 className=" text-gray-700 mb-4">Exceptaional Brands</h2>
                <h2 className=" text-gray-700 mb-4">Exclusive Brands</h2>
                <h2  className=" text-gray-700 mb-4 md:mb-2">Verified for Quality Services</h2>
                <div className="mt-10 sm:mb-5">
                    <button className="flex flex-row bg-white text-red-800 pb-2 pr-4 pl-4 pt-2 mb-4 rounded-md">Learn More
                    <ArrowRightCircleIcon className="w-5 h-5 mt-1 ml-2"/>
                    </button>
                {/* <p className=" p-4 mb-4">Learn More</p> */}
                </div>
               
                
            </div>
        </div></>
    );
  };
  
  export default Section;
  