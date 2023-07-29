import React from 'react'
import { useState, useEffect } from "react";
import { HotelData } from './HotelData';
import HotelDetailsCard from './HotelDetailsCard';
import "./HotelCard.css"
import { ChevronRightIcon} from "@heroicons/react/24/outline"


const HotelCard = ({ id, title, description }) => {

  
    return (
        <div className="swallow-card-container">
          <div className="swallow-card-header">
            <p className="text-black text-4xl ml-16 mb-4">{title}</p>
          </div>
          <p className="swallow-card-description ml-16 mb-4">{description}</p>
    
            <div className="relative flex flex-row rounded-sm">
              <div className="rounded-sm container mx-auto grid grid-cols-4 gap-x-20">
              {HotelData?.map((category) => (
             <HotelDetailsCard
               key={category.id}
               id={category.id}
               img={category.img}
               title={category.name}
             rating={category.rating}
               address={category.location}
               price={category.price}
               availability={category.availability}
             />
          ))}
              </div>
            </div>
     

          <div className='absolute right-12 mt-16 mb-40'>
    <button className='bg-red-900 flex flex-row pr-8 pl-8 pt-4 pb-4 gap-4 text-white rounded-md'>
        
        View All
        <ChevronRightIcon className="w-4 h-5  text-white font-extrabold pt-1" />
    </button>
</div>
        </div>
      );
    };
    
     
 
export default HotelCard;