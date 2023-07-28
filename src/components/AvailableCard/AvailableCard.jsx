import React from 'react'
import { useState, useEffect } from "react";
import { AvailableData } from './AvailableData';
import AvailableDetailsCard from './AvailableDetailsCard';
import { ChevronRightIcon} from "@heroicons/react/24/outline"
import "./AvailableCard.css"
// import { Circle } from 'rc-progress';

const AvailableCard = ({ id, title, description }) => {
    // return ( 
    //     <div className="scroll-container">
    //     <div className="scroll-content">
    //       {HotelData?.map((category) => (
    //         <HotelDetailsCard
    //           key={category.id}
    //           id={category.id}
    //           img={category.img}
    //           title={category.name}
    //         rating={category.rating}
    //           address={category.location}
    //           price={category.price}
    //           availibility={category.availability}
    //         />
    //       ))}
    //     </div>
    //   </div>
    // const [loading, setLoading] = useState(true); 
    // const [progress, setProgress] = useState(0);
  
    // useEffect(() => {
    //   const progressInterval = setInterval(() => {
    //     setProgress((prevProgress) => (prevProgress + 1) % 101);
    //   }, 20);
  
    //   return () => clearInterval(progressInterval);
    // }, []);
  
    return (
        <div className="swallow-card-container">
          <div className="swallow-card-header">
            <p className="text-black text-4xl">{title}</p>
          </div>
          <p className="swallow-card-description">{description}</p>
    
          {/* {loading ? (
          <div className="swallow-card-loading relative inline-block">

          <Circle
            className="loading-icon absolute align-middle flex justify-center"
            percent={progress}
            strokeWidth={4}
            strokeLinecap="round"
            strokeColor="#00ccbb"
          />
          <h1>loading....</h1>
        </div>
        
           
          ) : ( */}
          <div className="flex flex-row rounded-sm">
              <div className="flex flex-row gap-5 rounded-sm">
              {AvailableData?.map((category) => (
             <AvailableDetailsCard
               key={category.id}
               id={category.id}
               img={category.img}
               title={category.name}
             rating={category.rating}
               address={category.location}
               price={category.price}
               availibility={category.availability}
             />
          ))}
              </div>
            </div>
          {/* )} */}

          <div className='absolute right-12 mt-16 mb-40'>
    <button className='bg-red-900 flex flex-row pr-8 pl-8 pt-4 pb-4 gap-4 text-white rounded-md'>
        
        View All
        <ChevronRightIcon className="w-4 h-5  text-white font-extrabold pt-1" />
    </button>
</div>
        </div>
      );
    };
    
     
 
export default AvailableCard;