import React from 'react'
import { AvailableData } from './AvailableData';
import AvailableDetailsCard from './AvailableDetailsCard';
import { ChevronRightIcon} from "@heroicons/react/24/outline"
import "./AvailableCard.css"


const AvailableCard = ({ id, title, description }) => {

    return (
      <div className="swallow-card-container">
      <div className="swallow-card-header">
        <p className="text-black text-4xl ml-6 lg:ml-20 mb-4">{title}</p>
      </div>
      <p className="swallow-card-description ml-6 lg:ml-20 mb-4">{description}</p>

      <div className="relative flex flex-row rounded-sm">
        <div className="rounded-sm container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-x-20">
          {/* Update grid to show one item per column on mobile, two on tablet, and four on larger screens */}
          { AvailableData?.map((category) => (
            <AvailableDetailsCard
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

      {/* <div className="absolute right-6 bottom-0 md:right-12 md:bottom-16"> */}
      <div className='absolute right-12 mt-16 mb-40'>
        {/* Adjust button styles for better mobile and tablet appearance */}
        <button className="btn bg-red-900 flex flex-row pr-4 pl-4 pt-2 pb-2 gap-2 text-white rounded-md">
          View All
          <ChevronRightIcon className="w-4 h-5 text-white font-extrabold pt-1" />
        </button>
      </div>
    </div>
      );
    };
    
     
 
export default AvailableCard;